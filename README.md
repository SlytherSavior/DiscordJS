# 🚀 Discord.js Bot Boilerplate

This repository serves as a boilerplate for creating a Discord bot using the [Discord.js](https://discord.js.org/) library. The boilerplate includes basic setup, command handling, and deployment of slash commands.

## 📋 Features

- Basic bot setup with command handling
- Environment variable configuration for sensitive data
- Slash command deployment
- Scalable command structure

## 🛠️ Technologies Used

- **Discord.js**: For creating and managing the Discord bot
- **Node.js**: Server-side JavaScript runtime
- **dotenv**: For managing environment variables

## 📂 Project Structure

- `commands/`: Directory containing command files
- `deploy-commands.js`: Script for deploying slash commands
- `index.js`: Main bot file that initializes the bot and handles commands
- `.env`: File for storing environment variables (not included in the repo)
- `config.json`: Configuration file for client ID and token

## 🚧 Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- A Discord account and a bot created via the [Discord Developer Portal](https://discord.com/developers/applications)
- An `.env` file with your bot token

## 🛠️ Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/SlytherSavior/discordjs-bot-boilerplate.git
    cd discordjs-bot-boilerplate
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Create a `.env` file in the root directory and add your bot token:**

    ```plaintext
    DISCORD_TOKEN=your-bot-token-here
    ```

4. **Create a `config.json` file in the root directory and add your client ID:**

    ```json
    {
        "clientId": "your-client-id-here",
        "guildId": "your-guild-id-here" // Only needed if deploying commands to a specific guild
    }
    ```

## 🚀 Usage

### Deploy the commands:

    ```sh
    node deploy-commands.js
    ```

### Run the bot:

    ```sh
    node index.js
    ```

### Interact with the bot:

In any Discord server where the bot is present, use the slash commands as defined in the `commands/` directory.

## 📜 Example Command Structure

Here's an example of how your command files should be structured:

### Example Command File: `commands/ping.js`

```javascript
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
```
## 🐞 Known Issues

- No known issues at the moment. 

## 📫 Contact

For any questions or suggestions, feel free to reach out:

- **📧 Email**: shrijan5414@gmail.com
- **🔗 LinkedIn**: [linkedin.com/in/slyther](https://linkedin.com/in/slyther)
- **🐦 Twitter**: [twitter.com/SlytherShrijan](https://x.com/SlytherShrijan)
- **🌐 Website**: [shrijanpoudel.com.np](https://www.shrijanpoudel.com.np)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


