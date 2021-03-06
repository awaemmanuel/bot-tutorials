// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { StatePropertyAccessor } from 'botbuilder';
import { ComponentDialog, TextPrompt, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';
import { UserInfo } from '../bot';

export interface OnBoardResult {
  text: string;
}

export class OnBoardDialog extends ComponentDialog {
  static readonly dialogId = OnBoardDialog.name;

  private textPromptId = `${OnBoardDialog.dialogId}.textPrompt`;

  constructor(
    private readonly userInfo: StatePropertyAccessor<UserInfo>) {
    super(OnBoardDialog.dialogId);

    this.addDialog(new WaterfallDialog(`${OnBoardDialog.dialogId}.main`, [
      this.begin.bind(this),
      this.promptName.bind(this),
      this.captureName.bind(this),
      this.promptLocation.bind(this),
      this.captureLocation.bind(this),
      this.end.bind(this),
    ]));
    this.addDialog(new TextPrompt(this.textPromptId));
  }

  private async begin(step: WaterfallStepContext) {
    const user = await this.userInfo.get(step.context);
    if (user) {
      return await step.endDialog(user);
    } else {
      const user: UserInfo = {};
      user.text = step.context.activity.text;
      await this.userInfo.set(step.context, user);
      return await step.next();
    }
  }

  private async promptName(step: WaterfallStepContext) {
    return await step.prompt(this.textPromptId, 'It looks like this is your first time here. What should I call you?');
  }

  private async captureName(step: WaterfallStepContext) {
    const user = await this.userInfo.get(step.context, {});
    user.name = step.result as string;
    await this.userInfo.set(step.context, user);
    return await step.next();
  }

  private async promptLocation(step: WaterfallStepContext) {
    const user = await this.userInfo.get(step.context, {});
    return await step.prompt(this.textPromptId, `Ok ${user.name}, where are you located?`);
  }

  private async captureLocation(step: WaterfallStepContext) {
    const user = await this.userInfo.get(step.context);
    user.locationText = step.result as string;
    await this.userInfo.set(step.context, user);
    return await step.next();
  }

  private async end(step: WaterfallStepContext) {
    const user = await this.userInfo.get(step.context, {});
    const text = user.text;
    await step.context.sendActivity(`Ok, ${user.name}, I'll remember that you are located in ${user.locationText}. I think you were asking about _${user.text}..._`);
    const result: OnBoardResult = { text };
    return await step.endDialog(result);
  }

}
