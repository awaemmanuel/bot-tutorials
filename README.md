# MLADS Spring 2019 - Bot Tutorial

## Prerequisites

The following tools are required for your development environment:   

- [Visual Studio Code](https://code.visualstudio.com/) (any JavaScript editor will work, but VSCode is recommended)
- [NodeJS](https://nodejs.org/en/) (LTS)
- [Bot Framework Emulator](https://github.com/Microsoft/BotFramework-Emulator/releases)
- 🔑 __Authoring Key__ copied from [www.luis.ai](https://luis.ai/) (`Sign In` -> `Your Initials` (top right icon) -> `Settings` -> `Authoring Key`)
- 🔑 __Subscription Keys__ copied from [this shared site](https://aka.ms/mlads-bot) (to simplify this tutorial, you will use keys for LUIS, Azure Maps, and Dark Sky, provided by us)

Optional (only needed to deploy your bot to the cloud):
- [Azure](https://portal.azure.com) subscription
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)

## Tutorials

This repo contains four tutorials. With the exception of "hello world", all tutorials will be completed using TypeScript.

1. 🤖 [hello world](./tutorials/node/01-hello-world): A simple "echobot" that repeats messages to the user
    - (optional) [.NET Core](./tutorials/dotnet/hello-world)
    - (optional) [Python](./tutorials/python/Echo-Connector-Bot)
1. 🤖 [weather-luis](./tutorials/node/02-weather-luis): Build a LUIS weather model and integrate it with a simple stateless bot
1. 🤖 [weather-dialogs](./tutorials/node/03-weather-dialogs): Add dialogs and state to the bot
1. 🤖 [weather-complete](./tutorials/node/04-weather-complete): Add supporting geolocation and weather services to complete the bot

## Format  

The tutorials in this repo will help you build progressively complex bots. You will start with a simple "hello world" bot to understand bot basics before adding more interesting components like:

- Language understanding with LUIS "ludown" files
- Interpret LUIS intent and entities in your bot
- Manage user and conversation state across turns
- Control UX with bot dialogs
- Call out to external APIs  

## Authors  
💻 The tutorials in this repository were developed by the following members of the Azure Artificial Intelligence (AI) CAT Team:  

| Contributor | Email |
| ------ | :--------: | 
| 1. Emmanuel Awa - Software Engineer | [emmanuel.awa@microsoft.com](mailto:emmanuel.awa@microsoft.com) |
| 2. Chris Stone - Senior Software Engineer | [christopher.stone@microsoft.com](mailto:christopher.stone@microsoft.com)  |
| 3. Dipanjan Banik - Senior PM Lead | [dipanjan.banik@microsoft.com](mailto:dipanjan.banik@microsoft.com)  |
| 4. Sharat Chikkerur - Principal Data Science Lead | [sharat.chikkerur@microsoft.com](mailto:sharat.chikkerur@microsoft.com) |


## Resources  
1. [Microsoft Botframework - Full Landscape](https://github.com/Microsoft/botframework#readme)    
1. [Microsoft Botframework Solutions - Virtual Assistant Templates](https://github.com/microsoft/botframework-solutions)  
1. [Azure Bot Service](https://azure.microsoft.com/en-us/services/bot-service/)  
1. [Azure Botframework Documentation](https://dev.botframework.com/)  
1. [Azure Botframework GitHub](https://github.com/microsoft/botframework)  
1. [Botbuilder Samples](https://github.com/microsoft/BotBuilder-Samples)  
1. [Botbuilder SDK](https://github.com/microsoft/botframework-sdk)  


## Contributing

> This repo is currently only accepting bug fixes, not feature requests. If you spot a bug, please open an issue, and if possible, open a PR.

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

