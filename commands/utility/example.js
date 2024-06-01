
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('example')
        .setDescription('Example command description'),
    async execute(interaction) {
        await interaction.reply('This is an example command!');
    },
};
