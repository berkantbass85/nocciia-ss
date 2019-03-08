const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen **aç** veya **kapat** Yazmalısın!  ${ayarlar.prefix}küfürengel aç `).setColor("RED"));
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` Yetkisine Sahip Olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`kufur_${message.guild.id}`, 'acik').then(i => {
     return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('<:onayriax:547486994368954389> Küfür Engel Başarıyla Açıldı! \n`Üyeleri Yasakla` Yetkisine Sahip Olanların Küfürü Engellenmicektir.').setColor("RANDOM"));
    })
  }
  if (args[0] == 'kapat') {
    db.set(`kufur_${message.guild.id}`, 'kapali').then(i => {
     return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('<:onayriax:547486994368954389> Küfür Filtresi Başarıyla Kapatıldı.').setColor("RANDOM"));
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfür-engel'],
  kategori: "moderasyon",
  permLevel: 3
};

exports.help = {
  name: 'küfürengel',
  description: 'Küfür Engelleme Sistemini Açar/Kapatır.',
  usage: 'küfür-engelleme'
};