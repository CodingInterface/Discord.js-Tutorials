const config = require("./config.json")
const Discord = require("discord.js")
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`${bot.user.username} has logged in`);
});
let prefix = config.prefix

bot.on('message', msg => {
  if (msg.content === `${prefix}` + 'ping') {
    msg.reply("Pong!");
}
});

bot.login(config.token);
