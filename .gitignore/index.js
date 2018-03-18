const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("$help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDI0OTUxOTMwMzkzOTg1MDI0.DZBBcg.O640QTvTVmoT1a4h2RkBGVWaEdQ");
