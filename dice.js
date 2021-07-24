var Discord = require('discord.io');
var logger = require('winston');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.Discord_TOKEN,
   autorun: true
});
bot.on("ready", function (evt) {
    logger.info("Connected");
    logger.info("Logged in as: ");
    logger.info(bot.username + " - (" + bot.id + ")");
});
bot.on("message", function (user, userID, channelID, message, evt) {
if (message.substring(0, 3) == '初號機') {
        var args = message.substring(3).split(' ');
        var cmd = args[0];

//主要修改的部分
var ran = Math.floor(Math.random()*100)+1;//亂數產生1~100
        switch(cmd) {
            case 'dice'://若輸入!dice時執行
                bot.sendMessage({
                    to: channelID,
                    message: user + ' 骰出了 ' + ran + ' 點！'//機器人回覆這一行字
                });
            break;
         }

     }
});
