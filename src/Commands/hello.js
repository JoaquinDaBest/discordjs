const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("freenitro")
    .setDescription("Free Nitro for poor people :skull:"),
  execute: async (interaction, client) => {
    return interaction.reply({ content: ":skull:" });
    return interaction.reply({ content: "discord.gift/6g9pSSvxCDaAFvYyFytyCDQB" });
    return interaction.reply({ content: "lol" });
  },
};
