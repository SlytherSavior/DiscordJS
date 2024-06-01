const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./config.json'); // Load client ID and token from config.json
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
// Path to the commands directory
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    // Path to the individual command files within each folder
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    
    // Load each command file and push its JSON data to the commands array
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        
        // Ensure each command has the required properties before adding it
        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

// Create an instance of the REST module and set the token
const rest = new REST().setToken(token);

// Deploy commands
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // Use the put method to refresh all commands globally with the current set
        const data = await rest.put(
            Routes.applicationCommands(clientId), // To deploy commands globally
            // Routes.applicationGuildCommands(clientId, guildId), // To deploy commands to a specific guild
            { body: commands },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // Log any errors that occur during the deployment process
        console.error(error);
    }
})();
