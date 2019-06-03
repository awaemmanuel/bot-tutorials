// // Copyright (c) Microsoft Corporation. All rights reserved.
// // Licensed under the MIT License.

import { AutoSaveStateMiddleware, ConversationState, UserState } from 'botbuilder';
import * as express from 'express';

import { WeatherBot } from '../../04-weather-complete/src/bot';
import { BotEventTextMiddleware } from './events';
import { createAzureMap, createBotAdapter, createDarkSky, createStorage, createWeatherRecognizer } from './services';
import { BOT_SETTINGS, PORT } from './settings';
import { generateToken } from './tokens';

const darkSky = createDarkSky();
const map = createAzureMap();
const storage = createStorage();
const recognizer = createWeatherRecognizer();

const user = new UserState(storage);
const conversation = new ConversationState(storage);
const adapter = createBotAdapter().use(
  new AutoSaveStateMiddleware(user, conversation),
  new BotEventTextMiddleware());
const bot = new WeatherBot({ user, conversation, recognizer, darkSky, map });

express()
  .use(express.static(__dirname + '/../public'))
  .post('/api/tokens/generate', (req, res, next) => {
    try {
      const { directLineKey } = BOT_SETTINGS;
      generateToken(directLineKey).pipe(res);
    } catch (err) {
      next(err);
    }
  })
  .post('/api/messages', async (req, res, next) => {
    try {
      await adapter.processActivity(req, res, (context) => bot.run(context));
    } catch (err) {
      next(err);
    }
  })
  .listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/api/messages. Connect to the bot using Bot Framework Emulator.`));
