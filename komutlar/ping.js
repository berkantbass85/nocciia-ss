const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {
const newemb = new Discord.RichEmbed()
.setColor("RANDOM")
.addField('Botun Pingi,', new Date().getTime() - message.createdTimestamp + " ms ")
message.channel.send({embed: newemb})
}

exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: ["gecikme"],
  permLevel: `Yetki gerekmiyor. (${0})` 
};

exports.help = {
  name: 'ping',
  description: 'Bot, Size Pingini Söyler.',
  usage: '!!ping'
};