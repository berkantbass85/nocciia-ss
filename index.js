const express = require('express');
const http = require('http');

const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Çoğaldı!");
  response.sendStatus(200);
});


app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 100000);


const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');

const log = message => {
  console.log(`${chalk.yellow(`»`)} ${message}`);
};

var rebootperm = "394235034342522890";
var token = process.env.TOKEN;
var prefix = ayarlar.prefix; 
var sahip = ayarlar.sahip;
var tfortak = ayarlar.riaxORTAK;
var botdurum = "479379818241064960";
const db = require('quick.db');
var sahipyardimcisi = ayarlar.yardimci;
var botsurumu = "v0.9.8 Beta";
var davetlinkim = "https://discordapp.com/api/oauth2/authorize?client_id=547412651815338014&permissions=21469588398&scope=bot";
const parona = sahipyardimcisi;
var botuekle = "davetlinkim";
const desteksunucum = "https://discord.gg/gEByWfg";
var kufurizni = ayarlar.kufurizni;
var botlog = "481183469729480704";
var ceyhun = "517310118006751242";

client.on('ready', () => {
 console.log(`${chalk.blue("LOG: ")} ${chalk.green("Bot ")} ${chalk.red("Artık ")} ${chalk.yellow("Aktif!")}`);
 console.log(`${chalk.red("BİLGİ:")} ${chalk.green(client.guilds.size)} ${chalk.blue("Sunucudayım!")}`)
  const botacildi = new Discord.RichEmbed()
  .setAuthor(`${client.user.username} Aktif!`, client.user.avatarURL)
  .setColor("RANDOM")
  .addField(`❯ Yapımcı/Sahip;`, `<@${sahip}>`)
  .addField(`❯ Prefix;`, prefix)
  .addField(`❯ İstatistikler,`, `Kullanan Kullanıcı Sayısı: ${client.users.size}\nKullanan Sunucu Sayısı: ${client.guilds.size}`)
  console.log("Artık Şu Bot Aktif: " + client.user.username);
 });

client.on('ready', () => {
  client.user.setStatus("dnd")
  client.setInterval(() => {
    client.user.setActivity(`${prefix}yardım | ${client.guilds.size} Sunucu & ${client.users.size} Kullanıcı`, { type: 'LISTENING' });
  }, 7500);
});

client.on("message", message => {
  const adminstrator = new Discord.RichEmbed()
  .addField("☡ Hata ☡", `Bu Komutu Kullanabilmek İçin Yeterli Yetkin Yok!\n\nLütfen Bu Komutu Bir Yöneticinin Kullanmasını Söyle.`)
  .setColor("00FFFF")
  .setThumbnail(message.author.avatarURL)
  if (message.content.toLowerCase() === prefix + "dbaşlat") {
    if (!message.author.id == sahip && !message.author.id == ceyhun) return message.channel.send(adminstrator);
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(adminstrator);
  const disco = message.guild.roles.find("name", "Disco");
  if (!disco) return message.channel.send("Krdş Sunucuda `Disco` Adında Bir Rol Yok. Farkında Mısın?");
    else {
  client.setInterval(() => {
    message.guild.roles.get(disco.id).setColor("RANDOM")
  }, 10000);
      message.channel.send("🎉 Parti Zamanı!")
  }}});



/*
SiLentDeath Komutlar/Sistemler/Bilgiler
*/
//var - let
let sldp = "sld.";

//const

//bilgiler
var silentdeathsurum      = "v0.1.6 | Beta";
var silentdeathowner      = `<@${sahip}>`;
var yenilikkanali         = client.channels.get("481422847634571275");

//komutlar
//yenilikler
client.on("message", msg => {
  if (msg.content.toLowerCase() === sldp + "yenilikler") {
    const sdlyenilikler = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`SiLentDeath | ${silentdeathsurum} - Yenilikler`)
    .setThumbnail(msg.guild.iconURL)
   /*Yenilikler Satırı*/ .setDescription(`+ \`Rollerin Renkleri\` Düzenlendi!`)
    msg.channel.send(sdlyenilikler)
  }});

//yenilikyayınla
client.on("message", msg => {
  if (msg.content.toLowerCase() === sldp + "yenilikyayınla") {
    if (msg.member.hasPermission('MANAGE_ROLES')) return;
else {
  const args = msg.content.split(" ").slice(1);
  const newyenilik = args.slice(" ");
  if (newyenilik < 1) return msg.reply("Ben Hangi Yeniliği Yayınlicam?")
  const yenilikk = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField(`SiLentDeath - Her Zaman Yeni Özellik!`, `Yeniliği Yayınlayan: ${msg.author}`)
  .addField(`Yenilik,`, msg.content)
  yenilikkanali.send(yenilikk)
}}});
    
/*
SiLentDeath Komutlar/Sistemler/Bilgiler
*/

//Kapalı - SiLentDeath 🎉 Partiğğğğ
/*client.on("message", msg => {
  const disco1 = "481300518963118080";
  if (!disco1) return;
client.setInterval(() => {
  msg.guild.roles.get(disco1).setColor("RANDOM")
}, 7500);
});*/

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + "durumum") {
    const Durum = msg.author.presence.status;
    const durm = (Durum == "online" ? "Çevrimiçi" : Durum == "offline" ? "Çevrimdışı" : Durum == "idle" ? "Boşta" : Durum == "dnd" ? "Rahatsız Etmeyin" : "Bilinmiyor");
    const durumu = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Senin Durumun,")
    .setDescription(durm)
    msg.channel.send(durumu)
  }
});

client.on("message", message => {
if (message.content === prefix + "avatar") {
let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const avatar = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Buyur,")
        .setImage(user.avatarURL)
    message.channel.sendEmbed(avatar)
    }
});

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.on("message", message => {
  let msg = message;
  
  const sahib = new Discord.RichEmbed()
  .addField(`☡ Hata☡`, `Sen Benim Sahibim Değilsin!\n\nBu Komutu Kullanabilmek İçin Bot Sahibi Olmalısın.`)
  .setColor("RANDOM")
  .setThumbnail(msg.author.avatarURL)
  
  if (msg.content.toLowerCase() === prefix + "davet") {
    {
      const eklebeni = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.author.avatarURL)
      .addField('Linkler,', `Beni Eklemek İstiyorsan, [Bana](${davetlinkim}) Tıkla!\nSiteme gitmek istiyorsan, [Bana](${davetlinkim}) Tıkla!`)
      .addField('Ekstra Linkler,', `Geliştiricimin Botunu Eklemek İstiyorsan, [Bana](https://discordapp.com/oauth2/authorize?client_id=533279950640381952&scope=bot&permissions=2146958847) Tıkla!\nGeliştiricimin Botunun Destek Sunucusuna Gelmek İstiyorsan, [Bana](https://discord.gg/ceRVjFc) Tıkla!`)
      .setFooter(`Not: Ekstra Linkler 'de, Linkler Kadar Önemlidir!`)
    msg.channel.send(eklebeni);
    }}});

client.on("message", message => {
  const msg = message;
  const args = message.content.split(" ").slice(1);
  const sahib = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField(`☡ Hata ☡`, `Sen Benim Sahibim Değilsin!\n\nBu Komutu Kullanabilmek İçin Bot Sahibi Olmalısın.`)
  .setThumbnail(msg.author.avatarURL)

  if (message.content.startsWith(prefix + "eval")) {
    if(message.author.id !== `${sahip}` && (message.author.id !== `${sahipyardimcisi}`)) return message.channel.send(sahib);
    try {
      const code = args.join(" ");
      let evaled = eval(code);
      let msg = message;

      const boskod = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`**☡ Hata ☡**`, `Krdş Ben Boş Kodu Mu Denicem?`)
      if (code.length < 1) return message.channel.send(boskod);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      const embed1 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`Kod`, code)
      .addField(`Sonuç`, `\`\`\`xl\n${clean(evaled)}\`\`\``)
      message.channel.send(embed1);
    } catch (err) {
      const embed2 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`Hata`, `\`\`\`xl\n${clean(err)}\n\`\`\``)
      message.channel.send(embed2);
    }
  }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === prefix + "yardım" || msg.content.toLowerCase() === prefix + "y") {
const p = prefix;
   
 const yardim = new Discord.RichEmbed()
     .setColor("RANDOM") 
     .addField(`**❯ Genel/Kullanıcı**`, `${prefix}kullanıcı-bilgim => Bot, Size Hesabınız Hakkında Bilgi Verir.\n${prefix}sunucu-bilgi => Bot, Sunucu Hakkında Bilgi Verir.\n${prefix}döviz => Bot, Size Dolar ve Euro 'nun Satış/Alış Fiyatlarını Söyler.\n${prefix}avatar => Bot, Etiketlediğiniz Kişinin veya Sizin Avatarınızı Atar.\n${prefix}durumum => Bot, Size Durumunuzu Söyler.\n${prefix}şifre => Bot, Belirttiğiniz Uzunlukta Rastegele Şifre Oluşturur.\n${prefix}rhex => Bot, Random Hex Kodu Atar.\n${prefix}yaz => Bota Birşey Yazdırırsınız.\n${p}discrim => Bot, Sizin Discdiminizde Kimlerin Olduğunu Gösterir. (Hatalı)`)
     .addField(`**❯ Bot**`, `${prefix}yardım => Bot, Tüm Komutlarını Özel Mesaj Olarak Gönderir.\n${prefix}ping => Bot, Size Pingini Atar.\n${prefix}istatistik => Bot, Size İstatistiklerini Atar.`)
     .addField(`**❯ Eğlence**`, `${prefix}zekam => Bot, Sizin Zekanızı Ölçer.\n${prefix}espiri => Bot, Size Espiri Yapar.\n${prefix}estetik => Bot, Yazdığınız Yazıyı Estetik Olarak Yazar.\n${p}ters => Bot, Yazdığınız Şeyi Tersten Yazar.`)
     .addField(`**❯ NSFW (+18)**`, `${prefix}4k => 4K NSFW Fotoğraf Atar.\nDiğerleri Çok Yakında!`)
     .addField(`**❯ Müzik**`, `m${prefix}oynat => Bot, İstediğiniz Şarkıyı YouTube Üzerinden Açar.\nm${prefix}geç => Bot, Sıradaki Şarkıya Geçer.\nm${prefix}durdur => Bot, Şarkıyı Durdurur.\nm${prefix}ses => Bot, Müziğin Sesini Ayarlar.\nm${prefix}duraklat => Bot, Şarkıyı Duraklatır.\nm${prefix}devamet => Bot, Duraklatılan Şarkıyı Devam Ettirir.\nm${prefix}kuyruk => Bot, Şarkı Kuyruğunu/Listesini Gösterir.`)
     .addField(`**❯ Moderasyon**`, `${prefix}temizle => İstediğiniz Sayıda Mesaj Siler/Temizler.\nDiğerleri Çok Yakında!`)
     .addField(`**❯ Bot Sahibi**`, `${prefix}reboot => Botu Yeniden Başlatır.\n${prefix}eval => JavaScript Kodunu Dener.\n${prefix}sahipyaz => Bota Mesaj Yazdırır.\n${prefix}ayrıl => Yazılan Sunucudan Botu Ayrılır.`)
msg.author.send(yardim)

 const yardm = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setAuthor(" » Özel Mesajlarını Kontrol Et! « " , client.user.avatarURL)
     .setDescription(`📬 Tüm Komutlarımı, Sana Özel Mesaj Olarak Gönderdim!`)
msg.channel.send(yardm)

 }
});

client.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "ping") {
  const pingpong = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Botun Pingi")
  .setDescription(client.ping ? `${client.ping} ms` : "Hesaplanamıyor...")
msg.channel.send('Hesaplanıyor..')
.then(nmsg => nmsg.edit(pingpong));
}
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

    if (command === "temizle") {
      const hatabelirtilmedi = new Discord.RichEmbed()
      .setColor("00FFFF")
      .addField("☡ Hata ☡", `Yanlış Kullanım!\n\n**Doğru Kullanım**\n${prefix}temizle <@kişi> <sayı> **veya** ${prefix}temizle <sayı>`)
      .setThumbnail(message.author.avatarURL)
        const user = message.mentions.users.first();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Üzgünüm, mesajları silecek veya temizleyecek yetkin yok!')
        const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
        if (!amount) return message.channel.send(hatabelirtilmedi)
        if (!amount && !user) return message.channel.send(hatabelirtilmedi)
        message.channel.fetchMessages({
                limit: amount,
            })
            .then((messages) => {
                if (user) {
                    const filterBy = user ? user.id : bot.user.id;
                    messages = messages.filter(m => m.author.id === filterBy)
                        .array()
                        .slice(0, amount);
                }
                message.channel.bulkDelete(messages)
                    .catch(error => console.log(error.stack));
          const sohbetsilme = new Discord.RichEmbed()
          .setColor("RANDOM")
          .addField(`❯ Eylem:`, `Mesaj Silme`)
          .addField(`❯ Yetkili:`, message.member)
          .addField(`❯ Sonuç:`, `Başarılı`)
          .setThumbnail(message.member.avatarURL)
          message.channel.send(sohbetsilme);
            });
    }
  });

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'ayrıl') {
  if (msg.author.id !== sahip && msg.author.id !== sahipyardimcisi) {
    const sahiperror = new Discord.RichEmbed()
    .setColor("00FFFF")
    .addField("☡ Hata ☡", `Sen Benim Sahibim Değilsin!\n\nBu Komutu Kullanabilmek İçin Bot Sahibi Olmalısın!`)
    .setThumbnail(msg.author.avatarURL)
    msg.reply(sahiperror)
  } else {
    const sunucu = msg.guild.id;
    client.guilds.get(sunucu).leave();
    console.log(`LOG: ${msg.guild.name} Adlı Sunucudan, ${msg.author.tag} Tarafından Ayrılıyorum!`)
  }}});

client.on("message", message => {
  const msg = message;
    if (message.content.toLowerCase() === prefix + "reboot" || message.content.toLowerCase() === prefix + "reeboot") {
    if (message.author.id !== `${sahip}` && message.author.id !== `${sahipyardimcisi}` && msg.author.id !== `${rebootperm}`) {
      const sahiperror = new Discord.RichEmbed()
      .setColor("00FFFF")
      .addField("☡ Hata ☡", `Sen Benim Sahibim Değilsin!\n\nBu Komutu Kullanabilmek İçin Bot Sahibi Olmalısın!`)
      message.channel.send(sahiperror);
    } else {
      const rebooting = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("》 Başarılı! 《")
      .setDescription("❯ Yeniden Başlıyorum...")
      message.channel.send(rebooting).then(msg => {
      console.log(`LOG: ${msg.member} Tarafından, Yeniden Başlatılıyorum!`);
      process.exit(0);
    })
   }
  }
});

client.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'döviz') {
var request = require('request');
request('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) { 
        var info = JSON.parse(body);
request('https://www.doviz.com/api/v1/currencies/EUR/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
        var euro = JSON.parse(body);
     const dovz = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setAuthor("» Döviz «")
     .addField(`❯ Dolar `, `Satış:  ${info.selling}₺\nAlış :  ${info.buying}₺`)
     .addField(`❯ Euro `, `Satış:  ${euro.selling}₺\nAlış :  ${euro.buying}₺`)
     .setFooter("Bu Komutta, doviz.com Alt Yapısı Kullanılmıştır.")
      message.channel.send(dovz)    }
})
    }
})
    }
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;

  const channel = member.guild.channels.find('name', 'nightwish');
  if (!channel) return member.guild.owner.send(member.guild.name + " İsimli Sunucunda **nightwish** İsimli Bir Kanal Yok!");
  const giris = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı!')
  .setTimestamp()
  channel.sendEmbed(giris); 
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'nightwish');
  if (!channel) return;
  const cikis = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucudan ayrıldı')
  .setTimestamp()
  channel.sendEmbed(cikis); 
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + "bilgi") {
const bilgiembed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setAuthor(`Bilgi Menüsü`)
     .addField(`❯ Bot İsmi:`, `${client.user.username}`)
     .addField(`❯ Botun Prefix 'i:`, prefix)
     .addField(`❯ Bot Sürümü:`, botsurumu)
     .addField(`❯ Bot Sahibi:`, `<@${sahip}>`)
     .addField(`❯ Bot Geliştiricileri`, `<@${ceyhun}>`)
     .addField(`❯ Botun Kuruluş Tarihi:`, `15 Ağustos 2018\n`)
     .addField(`Destek Sistemi Kurulum,`, `Destek Sistemini Sunucunuzda Aktifleştirmeniz İçin, \`Destek Ekibi\` Adında Bir Rol Oluşturup, Destek Yetkililerine Veriniz. Birde, \`wh-destek\` Adında Bir Kanal Açın.\nVeee, Destek Sistemi Artık Sunucunuzda Aktif!`)
     .addField(`Disco/Rinbow Rol Kurulumu,`, `Sunucunuzda \`Disco\` Adında Bir Rol Açın, Botun Rolünü 1. Sıraya, Disco Rolünüde 2. Sıraya Koyun Ve İstediğiniz Kişilere Verin. Sistemin Çalışması İçinde, \`${prefix}dbaşlat\` Yazmanız Yeterli.`)
     .addField(`\nLinkler,`, `[Botu Eklemek İçin Tıkla!](${davetlinkim})\n[Botun Destek Sunucusuna Gelmek İçin Tıkla!](${desteksunucum})`)
     .setFooter(`© ${client.user.username} 2018`)
msg.channel.send(bilgiembed)
}
});

client.on('message', message => {
    var sans = ["11", "15", "20", "24", "28", "31 (Cenabetsin Krdşm. Git Gusül Al 😒)", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein Mısın Kardeşim?"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***Zekan***`, `${sonuc}`)
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    if (message.content.toLowerCase() === prefix + "zekam") {
      if (message.author.id !== sahip) return message.channel.send(embed);
      else {
        var ssans = ["99", "98", "97", "96", "95", "94", "93", "92", "91", "90", "Albert Einstein Mısın Kardeşim?"];
        var ssonuc = ssans[Math.floor((Math.random() * ssans.length))];
        const sembed = new Discord.RichEmbed()
        .addField(`***Senin Zekan***`, `${ssonuc}`)
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        message.channel.send(sembed)
      }
}
});

client.on('message', message => {
if (message.content.toLowerCase() === prefix + "espri") {
    var sans = ["Geçen gün geçmiş günlerimi aradım ama meşguldü.", "Yağmur yağmış kar peynir", "Dünya dönermiş ay da köfte…", "Bu erikson başka erik yok.", "Yıkanan Ton a ne denir Washington", "Hadi oyun oynayalım. Vazgeçtim oymadan oynayalım!", "Geçen gün kamyonu sürdüm Leonardo da Vinci.", "Doğumdan sonra çok kilo aldım. Doğduğumda 2 kiloydum şimdi 62.", "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek le olayım demiş.", "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.", " Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.", "Osmanlıda kimseye borç takamıyordun mesela sikke sikke ödüyodun…", "Tatlı yiyip, tatlı konuşuluyorsa bundan sonra mantı yiyip mantıklı konuşacağız.", "Babamı sahura kaldırmayı unuttuk anneme masada ne eksik diyorum tuzluk mu diyor.", "+Okeyde kıza elin nasıl dedim. Ojeli dedi. Ben Şoka girdim. O Migrosa.", "Canım sıkkın kanka sonra gel"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***Espri***`, `${sonuc}`)
    .setColor("RANDOM")
    message.channel.sendEmbed(embed);
}
});


client.on("message", msg => {
 if (msg.content.toLowerCase() === prefix + "yenilikler") {
  const yenilikler = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setAuthor(`${client.user.username} - ${botsurumu} - Yenilikler`)
     .setDescription("+ **Destek Sistemi** Eklendi! (Detaylar, !!bilgi)\n+ **Müzik Komutları** Eklendi!\n+ **Disco** Eklendi! (Detaylar, !!bilgi)\n- **Level Sistemi** Kaldırıldı!\n+ \`estetik\` Komutu Eklendi!\n+ \`ters\` Komutu Eklendi!")
     .setFooter(`© ${client.user.username} 2018 - ${msg.author.username} Tarafından İstendi.`)
msg.channel.send(yenilikler)
 }
});

    client.on("message", message => {
    const dmchannel = client.channels.get("479520368701472769");
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        const ozeldenyazilan = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Birisi, Özelden Bana Mesaj Yazdı!")
        .addField(`❯ Yazıyı Yazan:`, `Tag: ${message.author.tag}\nID: ${message.author.id}`)
        .addField(`❯ Yazdığı Yazı:`, message.content)
        console.log(`Birisi Bana Özelden Mesaj Yazdı! Yazar: ${message.author.tag}  |  Mesaj: ${message.content}`)
      dmchannel.send(ozeldenyazilan)
              }});

const moment = require('moment');
const { version } = require("discord.js");
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');


client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "istatistik" || message.content.toLowerCase() === prefix + "i") {
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
        const embedStats = new Discord.RichEmbed()
            .setAuthor(client.user.username + " - İstatistikler", client.user.avatarURL)
            .setColor("RANDOM")
            .addField("❯ Bellek Kullanımı", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`)
            .addField("❯ Çalışma Süresi ", `${duration}`)
            .addField("❯ Bot İstatistikleri", `» Kullanıcı: ${client.users.size.toLocaleString()}\n» Sunucu: ${client.guilds.size.toLocaleString()}\n» Kanal: ${client.channels.size.toLocaleString()}`)
            .addField("❯ Versiyonlar", `» Discord.js: v${version}\n» Node.js: ${process.version}`)
            .addField("❯ CPU", `\`\`\`${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("❯ CPU Kullanımı", `${percent.toFixed(2)}%`)
            .addField("❯ İşletim Sistemi", `**${os.platform()}**  ${os.arch()} Bit`) 
        message.channel.send(embedStats)
   }
 )}});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

const generator = require('generate-password');

client.on("message", message => {
   if (message.content === prefix + "şifre") {
const args = message.content.split(" ").slice(1);
    var uzunluk = args.slice(0).join(' ');

     const uzunlukyok = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`☡ Hata ☡`, `Bir Uzunluk Belirtmedin!`)
     .addField(`Doğru Kullanım;`, `${prefix}şifre <uzunluk>`)
    if (!uzunluk) return message.channel.send(uzunlukyok);

    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    });

     const sifrem = new Discord.RichEmbed()
     .addFile(`İşte Şifren!`, password)
     .setColor("RANDOM")
     .setFooter(`${client.user.username} - Password Generator`)
    message.author.send(sifrem);
   }
});

const botadi = "NightWish"; 
const girismesaj = [
  `**${botadi}, sunucunuza eklendi!**`,
  `**${botadi}**, sunucunuzdaki insanlara kolaylıklar sağlar.`,
  `Bot \`Kerem K.\` ve \`Ceyhun Y.\` tarafından geliştirilmektedir.`,
  `Botumuzun özelliklerini öğrenmek için ${prefix}yardım komutunu kullanabilirsiniz.`,
  `Botumuzun, **Bazı** Özellikleri Kullanabilmek İçin \`nightwish\` Adında Bir Kanal Açın.`
]

const girismesaji = [
  `**${botadi}, Sunucunuza Eklediğiniz İçin Teşekkür Eder.**`,
  `**${botadi}, Sunucunuzdaki İnsanlara Kolaylık Sağlar.`,
  `Botumuzun Özelliklerini/Komutlarını Öğrenmek İçin, \`${prefix}yardım\ Komutunu Kullanabilirsiniz.`, 
  `Bot, \`Kerem K.\` ve \`Ceyhun Y.\` Tarafından Geliştirilmektedir.`,
  `Eğer Botumuzun **Bazı** Özelliklerini Kullanmak İstiyorsanız, \`nightwish\` Adında Bir Kanal Açabilirsiniz.`
 ]

client.on('guildCreate', guild => {
    const sunucusahibi = guild.owner;
    sunucusahibi.sendMessage(girismesaj)
});

client.on('guildDelete', guild => {
  const sunucusahibi = guild.owner;
  const atildim = [
    `**${guild.name} İsimli Sunucundan Atıldım!**`,
    `Sanırım Beni Sevmediniz :frowning:`,
    `Eksiklerimi, Bana Eklenmesini İstediğiniz Şeyleri, <@${sahip}> Adlı Kullanıcıya (Sahibime) İletebilirsiniz.`,
    `İyi Günler...`
    ]
  sunucusahibi.sendMessage(atildim)
});

client.on("message", async message => {
    if (message.content.toLowerCase() === prefix + "4k" || message.content.toLowerCase() === "#") {
 if(message.channel.nsfw || message.channel.type === 'dm'){
   const nsfw4k = new Discord.RichEmbed()
   .setTitle('Buyur Canım,')
   .setColor("RANDOM")
   .setImage(("https://cdn.boobbot.us/4k/4k"+ Math.floor(Math.random() * 1460)+".jpg"))
   message.channel.send(nsfw4k)
}
 else{
   const hata4k = new Discord.RichEmbed()
   .addField(`☡ Hata ☡`, `Bu Kanal, NSFW Kanalı Değil!`)
   .setColor("FF0000")
       message.channel.send(hata4k)
 }
}
});

//Bakımda!
client.on('message', message => {
  const random = Math.floor(Math.random() * 1460)
  if (message.content.toLowerCase() === prefix + "gif") {
    if(message.channel.nsfw || message.channel.type === 'dm'){
      const nsfwgif = new Discord.RichEmbed()
      .setTitle('Buyur Canım,')
      .setColor("RANDOM")
      .setImage(`https://cdn.boob.bot/Gifs/`+ random +`A.gif`)
     message.channel.send(nsfwgif)
      } else {
        const hatagif = new Discord.RichEmbed()
        .addField('☡ Hata ☡', `Bu Kanal, NSFW Kanalı Değil!`)
        .setColor("00FFFF")
        message.channel.send(hatagif)
      }}});
//Bakımda!

client.on("message", msg => {
 if (msg.content.toLowerCase() === "sa" || msg.content.toLowerCase() === "sea" || msg.content.toLowerCase() === "selam") {
   const as = new Discord.RichEmbed()
   .setColor("RANDOM")
   .addField(msg.author.username, "Aleyküm Selam Naber ? 😉")
   msg.channel.send(as)
 }});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + "yaz")) {
    let mesaj = msg.content.substring(2 + 3);
    msg.delete();
    const mesajembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(mesaj)
    .setAuthor(`${msg.author.username}`, msg.author.avatarURL)
    
    msg.channel.send(mesajembed);
    }
    });

client.on('message', msg => {
  const sahib = new Discord.RichEmbed()
  .addField(`☡ Hata ☡`, `Sen Benim Sahibim Değilsin!\n\nBu Komutu Kullanabilmek İçin Bot Sahibi Olmalısın.`)
  .setColor("00FFFF")
  .setThumbnail(msg.author.avatarURL)
  if (msg.content.startsWith(prefix + "sahipyaz")) {
    if (msg.author.id !== sahip) return msg.channel.send(sahib);
    let mesaj = msg.content.substring(2 + 8);
    const bosmesaj = new Discord.RichEmbed()
    .addField(`☡ Hata ☡`, `Krdş Ben Neyi Yazcam?`)
    .setColor("00FFFF")
    .setThumbnail(msg.author.avatarURL)
     const args = msg.content.split(" ").slice(1);
if (args.length < 1) { 
      msg.channel.send(bosmesaj)
  } else {
    msg.delete();
    msg.channel.send(mesaj);
    }
    }});

client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "estetik") {
        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ[/]^_`ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ{|}~';
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
            message.channel.send('Estetik yazılacak yazıyı yazmalısın.');
        }

        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .join('')
        )
    }
});

client.on("message", message => {
  const user = message.author;
  			var tarih = ''
			if(moment(user.createdAt).format('MM') === '01') {
				var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '02') {
				var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '03') {
				var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '04') {
				var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '05') {
				var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '06') {
				var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '07') {
				var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '08') {
				var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '09') {
				var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '10') {
				var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '11') {
				var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '12') {
				var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			};
			
    if (message.content.toLowerCase() === prefix + "sunucubilgi" || message.content.toLowerCase() === prefix + "sb" || message.content.toLowerCase() === prefix + "sunucu-bilgi") {
        const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('❯ Sunucu Adı:', message.guild.name)
    .addField('❯ Sunucu ID:', message.guild.id)
    .addField('❯ Sunucu Bölgesi:', message.guild.region)
    .addField('❯ Üye Sayısı:', message.guild.memberCount)
    .addField('❯ Sunucu Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('❯ Kanal Sayısı:', message.guild.channels.size)
    .addField('❯ Oluşturulma Tarihi:', tarih)
            .setColor("RANDOM")
        return message.channel.send(embed)
    }});

        client.on('message', msg => {
          if (msg.content.toLowerCase() === prefix + "kb" || msg.content.toLowerCase() === prefix + "kullanıcı-bilgim") {

            var args = msg.content.split(" ").slice(1);
    const member = args.member;
		const user = msg.author;
			const Durum = user.presence.status;
			const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
			const durm = (Durum == "online" ? (client.emojis.get('466955711910248458') + "Çevrimiçi") : (Durum == "offline" ? (client.emojis.get('466955726145847326') + "Çevrimdışı") : (Durum == "idle" ? (client.emojis.get('466955712887783424') + "Boşta") : (Durum == "dnd" ? (client.emojis.get('466955726674460673') + "Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))

			var tarih = ''
			if(moment(user.createdAt).format('MM') === '01') {
				var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '02') {
				var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '03') {
				var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '04') {
				var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '05') {
				var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '06') {
				var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '07') {
				var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '08') {
				var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '09') {
				var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '10') {
				var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '11') {
				var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '12') {
				var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			};
			
				    const embed = new Discord.RichEmbed()
					.setColor(Durm)
					.setAuthor(user.username, user.avatarUR)
					.addField(`❯ İsmi:`, `${user.tag}`)
					.addField(`❯ ID:`, `${user.id}`)
					.addField(`❯ Kayıt tarihi:`, tarih)
					.addField(`❯ Durumu:`, `${durm}`)
					.addField(`❯ Şu an oynadığı oyun:`, `${user.presence.game ? user.presence.game.name : 'Şu anda oyun oynamıyor.'}`)
					.addField(`❯ Bot mu?`, `${user.bot ? 'Evet' : 'Hayır'}`)
					.setThumbnail(user.avatarURL)
					msg.channel.send(embed);
          }});

client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
if(command === "discrim") {
        const discrim = args[0] || message.author.discriminator;
        const users = bot.users.filter(user => user.discriminator === discrim).map(user => user.tag);
        
        if (users < 1) {
const embed2 = new Discord.RichEmbed()
.setColor(3447003)
.setDescription(`${discrim} bulunamadı!`)
            return message.channel.send({embed2});
        } else {
           message.channel.send(`**${message.author.discriminator}** Discrim'inde Şu Kişiler Var,\n${users.join('\n')}`, { split: true })
        }
    }
});

client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "ters") {
        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
          const boskod = new Discord.RichEmbed()
          .setColor("RANDOM")
          .addField("☡ Hata ☡", `Krdş Ben Neyi Ters Yazcam?`)
          .setThumbnail(message.author.avatarURL)
            message.channel.send(boskod);
        }

        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join('')
        )
    }});

client.on('message', msg => {
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.name== 'destek') { 
    const hatay = new Discord.RichEmbed()
    .addField("☡ Hata ☡", `Bu Sunucuda \`Destek Yetkilisi\` Adında Bir Rol Yok!`)
    .setColor("RANDOM")
    
    if (!msg.guild.roles.exists("name", "Destek Yetkilisi")) return msg.author.send(hatay) + msg.guild.owner.send(`${msg.guild.name} Adlı Sunucunda, \`Destek Yetkilisi\` Adlı Bir Rol Olmadığı İçin, Hiçkimse Destek Talebi Açamıyor!`);
    if(msg.guild.channels.find('name', 'R | Talepler')) {
      msg.guild.createChannel(`destek-${msg.author.id}`, "text").then(c => {
      const category = msg.guild.channels.find('name', 'Talepler')
      c.setParent(category.id)
      let role = msg.guild.roles.find("name", "Destek Yetkilisi");
      let role2 = msg.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`)
      .addField(`Merhaba ${msg.author.username}!`, `Destek Yetkilileri burada seninle ilgilenecektir. \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilirsin.`)
      .addField(`» Talep Konusu/Sebebi:`, `${msg.content}`, true)
      .addField(`» Kullanıcı:`, `<@${msg.author.id}>`, true)
      .setFooter(`${client.user.username} | Destek Sistemi`)
      .setTimestamp()
      c.send({ embed: embed });
      c.send(`<@${msg.author.id}> Adlı kullanıcı "\`${msg.content}\`" sebebi ile destek talebi açtı! Lütfen Destek Ekibini bekle, @here`)
      msg.delete()
      }).catch(console.error);
    }
  }

  if (msg.channel.name== 'destek') { 
    const hatay1 = new Discord.RichEmbed()
    .addField("☡ Hata ☡", `Bu Sunucuda \`Destek Yetkilisi\` Adında Bir Rol Yok!`)
    .setColor("RANDOM")
    
    if (!msg.guild.roles.exists("name", "Destek Yetkilisi")) return msg.author.send(hatay1) + msg.guild.owner.send(hatay1);
    if(!msg.guild.channels.find('name', 'R | Talepler')) {
      msg.guild.createChannel(`WH | Talepler`, 'category').then(category => {
      category.setPosition(1)
        let every = msg.guild.roles.find("name", "@everyone");
      category.overwritePermissions(every, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false,
        READ_MESSAGE_HISTORY: false
      })
      msg.guild.createChannel(`destek-${msg.author.id}`, "text").then(c => {
      c.setParent(category.id)
      let role = msg.guild.roles.find("name", "Destek Yetkilisi");
      let role2 = msg.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`)
      .addField(`Merhaba ${msg.author.username}!`, `Destek Yetkilileri burada seninle ilgilenecektir. \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilirsin.`)
      .addField(`» Talep Konusu/Sebebi:`, `${msg.content}`, true)
      .addField(`» Kullanıcı:`, `<@${msg.author.id}>`, true)
      .setFooter(`${client.user.username} | Destek Sistemi`)
      .setTimestamp();
      c.send({ embed: embed });
      c.send(`<@${msg.author.id}> Adlı kullanıcı "\`${msg.content}\`" sebebi ile destek talebi açtı! Lütfen Destek Ekibini bekle, @here`)
      msg.delete()
      }).catch(console.error);
    })
  }
}
});
  
client.on("message", message => {
if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
    if (!message.channel.name.startsWith(`destek-`)) return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılablir!`);

    var deneme = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Destek Talebi Kapatma İşlemi`)
    .setDescription(`Destek talebini kapatmayı onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
    .setFooter(`${client.user.username} | Destek Sistemi`)
    message.channel.send(deneme)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Destek Talebi kapatma isteğin zaman aşımına uğradı!').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
});

client.on('guildCreate', guild => {
    let channel = client.channels.get(botlog)
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`Bir Sunucuya Eklendim!`)
        .setThumbnail(guild.iconURL)
        .addField(`❯ Sunucu Adı`, guild.name)
        .addField("❯ Kurucu", guild.owner)
        .addField("❯ Sunucu ID", guild.id, true)
        .addField("❯ Toplam Kullanıcı", guild.memberCount, true)
        .addField("❯ Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });
client.on('guildDelete', guild => {
    let channel = bot.channels.get(botlog)
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`Bir Sunucudan Atıldım!`)
        .setThumbnail(guild.iconURL)
        .addField("❯ Sunucu Adı", guild.name)
        .addField("❯ Kurucu", guild.owner)
        .addField("❯ Sunucu ID", guild.id, true)
        .addField("❯ Toplam Kullanıcı", guild.memberCount, true)
        .addField("❯ Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });

client.on("message", msg => {
  
  
  db.fetch(`kufur_${msg.guild.id}`).then(i => {
    if (i == 'acik') {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir. Küfür Etmene İzin Veremem !').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (i == 'kapali') {  
    }
    if (!i) return;
  })
    });

client.on("message", async message => {

    let cont = message.content.slice(prefix.length).split(" ")
    let args = cont.slice(1)
    if (message.content.startsWith(prefix + 'otorol')) {
    let rol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('<:hatariax:547486679993286666> Otorol ayarlamak için `Rolleri Yönet` yetkisine sahip olman gerek.')
    let newRole;
    let tworole;
    if (!rol) return message.channel.send('<:hatariax:547486679993286666> Otorol ayarlamanız için bir rol etiketlemeniz gerek. ?otorol @Üye #kanal`')
    else newRole = message.mentions.roles.first().id
    let isim = message.mentions.roles.first().name  
    let otorolkanal = message.mentions.channels.first();
    if (!otorolkanal) return message.channel.send('<:hatariax:547486679993286666> Otorol ayarlamanız için bir rol etiketlemeniz gerek. `?otorol @Üye #kanal`')
    db.set(`otorolisim_${message.guild.id}`, isim)
    db.set(`otorolKanal_${message.guild.id}`, message.mentions.channels.first().id).then(i => {
    db.set(`autoRole_${message.guild.id}`, newRole).then(otorol => {
    if (!message.guild.roles.get(newRole)) return message.channel.send("<:hatariax:547486679993286666> Etiketlediğiniz rol bulunamadı, etiketlediğiniz rolün etiketlenebilirliğinin aktif olduğundan emin olunuz.")
      message.channel.send(`<:onayriax:547486994368954389> Otorol, <@&${newRole}> mesaj kanalı <#${i}> olarak ayarlandı.`)
   
  })  
});        
    }
})
//iki
client.on('guildMemberAdd', async member => {
  const i = await db.fetch(`otorolKanal_${member.guild.id}`);
    const rol = await db.fetch(`autoRole_${member.guild.id}`);
    //   let msj = await db.fetch(`otorol-mesaj_${member.guild.id}`)
      let role = member.guild.roles.get(rol).name
      //member.guild.channels.get(i).send(msj.replace('${uye}', `${member}`).replace('${rol}', `${role}`))
 member.guild.channels.get(i).send(`<:onayriax:547486994368954389> ${member} adlı kullancıya \`${role}\` rolü verildi!`) 
try {
  
  member.addRole(member.guild.roles.get(rol))
} catch (e)  {
  
  if (!rol && !i) return
  
  console.log(`${member.guild.name} adlı sunucuda otorol hatası var`)
  
}
  });
 
client.on("message", message => {
if (message.content.toLowerCase() === prefix + "sunucuresmi" || message.content.toLowerCase() === prefix + "sunucu-icon") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setTitle(`Buyur,`)
.setImage(message.guild.iconURL)
.setColor("RANDOM"));
}});

const { Client, Util } = require('discord.js');
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./müzik');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(GOOGLE_API_KEY);
const ytdl = require('ytdl-core')
const queue = new Map();
 
client.on('warn', console.warn);
 
client.on('error', console.error);
 
client.on('ready', () => console.log('Bot artık hazır!'));
 
client.on('disconnect', () => console.log('Bağlantım kesildi, bildiğinizden emin olun, şimdi tekrar bağlanacağım...'));
 
client.on('reconnecting', () => console.log('Tekrar bağlanıyorum!'));
 
 
 
client.on('message', async msg => { // eslint-disable-line
        if (msg.author.bot) return undefined;
        if (!msg.content.startsWith(prefix)) return undefined;
 
        const args = msg.content.split(' ');
        const searchString = args.slice(1).join(' ');
        const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
        const serverQueue = queue.get(msg.guild.id);
 
        let command = msg.content.toLowerCase().split(' ')[0];
        command = command.slice(prefix.length)
 
 
 
        if (command === 'çal') {
    if (!msg.guild) {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setDescription(`You can not use commands here.`)
      return msg.author.sendEmbed(ozelmesajuyari); }
                const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('<:hatariax:547486679993286666> İlk olarak sesli bir kanala giriş yapmanız gerek.'));
                const permissions = voiceChannel.permissionsFor(msg.client.user);
                if (!permissions.has('CONNECT')) {
      return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('<:hatariax:547486679993286666> Şuanda olduğunuz kanala girmek için gerekli izinlere sahip değilim.'));
                }
                if (!permissions.has('SPEAK')) {
      return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('<:hatariax:547486679993286666> Şarkı başlatılamıyor. Lütfen mikrofonumu açınız.'));
                }
 
                if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                        const playlist = await youtube.getPlaylist(url);
                        const videos = await playlist.getVideos();
                        for (const video of Object.values(videos)) {
                                const video2 = await youtube.getVideoByID(video.id); // ehehehehu videomuzu bulalım
                                await handleVideo(video2, msg, voiceChannel, true); // ve gönderelim
                        }
      return msg.channel.sendEmbed(new Discord.RichEmbed)
      .setDescription(`✔ | Playlist ➢ **${playlist.title}** has been added to the queue!`);
                } else {
                        try {
                                var video = await youtube.getVideo(url);
                        } catch (error) {
                                try {
                                        var videos = await youtube.searchVideos(searchString, 10);
                                        let index = 0;
                                        msg.channel.sendEmbed(new Discord.RichEmbed()
                                .setTitle('Şarkı Seçimi')
      .setDescription(` ${videos.map(video2 => `*${++index}* 》 **${video2.title}**`).join('\n')}`)
       .setFooter('Lütfen 1-10 arasında bir rakam seçiniz 30 saniye içinde liste iptal edilecektir.')
          .setColor('RANDOM'));
                                        // en fazla 5 tane
                                        try {
                                                var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                                                        maxMatches: 1,
                                                        time: 10000,
                                                        errors: ['time']
                                                });
                                        } catch (err) {
                                                console.error(err);
            return msg.channel.sendEmbed(new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription('<:hatariax:547486679993286666> Şarkı seçimi iptal edildi. '));
                                        }
                                        const videoIndex = parseInt(response.first().content);
                                        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                                } catch (err) {
                                        console.error(err);
          return msg.channel.sendEmbed(new Discord.RichEmbed()
          .setColor('RANDOM')
          .setDescription('<:hatariax:547486679993286666> Herhangi bir arama sonucu elde edemedim.'));
                                }
                        }
                        return handleVideo(video, msg, voiceChannel);
                }
        } else if (command === 'geç') {
    if (!msg.guild) {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setDescription(`You can not use commands here.`)
      return msg.author.sendEmbed(ozelmesajuyari); }
    if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('<:hatariax:547486679993286666> Lütfen öncelikle sesli bir kanala katılınız.'));
                if (!serverQueue) return msg.channel.send('<:hatariax:547486679993286666> Kuyruk boş olduğu için geçemiyorum. ');
                serverQueue.connection.dispatcher.end('Geç komudu kullanıldı.');
                return undefined;
        } else if (command === 'kapat') {
    if (!msg.guild) {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setDescription(`You can not use commands here.`)
      return msg.author.sendEmbed(ozelmesajuyari); }
    if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('<:hatariax:547486679993286666> Lütfen öncelikle sesli bir kanala katılınız.'));
    if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('<:hatariax:547486679993286666> Şu anda herhangi bir şarkı çalmıyorum.'));
                serverQueue.songs = [];
                serverQueue.connection.dispatcher.end('Kapat komutu kullanıldı!');
                return undefined;
        } else if (command === 'ses') {
      if (!msg.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
        .setDescription(`You can not use commands here.`)
        return msg.author.sendEmbed(ozelmesajuyari); }
    if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
  .setDescription('<:hatariax:547486679993286666> Lütfen öncelikle sesli bir kanala katılınız.'));
    if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
   .setDescription('<:hatariax:547486679993286666> Şu anda herhangi bir şarkı çalmıyorum.'));
    if (!args[1]) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(` <:onayriax:547486994368954389> | Ses seviyesi: **${serverQueue.volume}**`));
                serverQueue.volume = args[1];
        if (args[1] > 10) return msg.channel.send({
            embed: {
                title: "",
                color: 0xE50000,
                description: "<:hatariax:547486679993286666> Lütfen 10'dan az yada 10 olarak bir sayı belirtin."
            }
        });
                serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
   .setDescription('<:onayriax:547486994368954389> Ses Seviyesi ' + `**${args[1]}**` + ' Olarak Ayarlandı.'));
        } else if (command === 'çalınan') {
   
   
    if (!msg.guild) {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setDescription(`<:hatariax:547486679993286666> Şu anda hiçbir şey çalmıyorum.`)
      return msg.author.sendEmbed(ozelmesajuyari); }
    if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('<:hatariax:547486679993286666> | Şu anda hiçbir şey çalmıyorum.'));
    return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('Başlık', `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`, true)
    .addField("Süre", `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`, true))
        } else if (command === 'kuyruk') {
                if (!serverQueue) return msg.channel.send('<:hatariax:547486679993286666> Şu anda hiçbir şey çalmıyorum. ');
                return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
     .setTitle('Şarkı Kuyruğu')
    .setDescription(`${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}`))
    .addField('Şu anda çalınan: ' + `${serverQueue.songs[0].title}`);
        } else if (command === 'durdur') {
    if (!msg.guild) {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setDescription(`You can not use commands here.`)
      return msg.author.sendEmbed(ozelmesajuyari); }
                if (serverQueue && serverQueue.playing) {
                        serverQueue.playing = false;
                        serverQueue.connection.dispatcher.pause();
      return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setDescription('<:onayriax:547486994368954389> Müzik durduruldu.')
      .setColor('RANDOM'));
                }
                return msg.channel.send('<:hatariax:547486679993286666> Şu anda hiçbir şey çalmıyorum.');
        } else if (command === 'devam') {
    if (!msg.guild) {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setDescription(`Burada komutu kullanamazsınız.`)
      return msg.author.sendEmbed(ozelmesajuyari); }
                if (serverQueue && !serverQueue.playing) {
                        serverQueue.playing = true;
                        serverQueue.connection.dispatcher.resume();
      return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('<:onayriax:547486994368954389> Müzik devam ediyor.'));
                }
                return msg.channel.send('<:hatariax:547486679993286666> Şu anda hiçbir şey çalmıyorum.');
  }
 
        return undefined;
});
 
async function handleVideo(video, msg, voiceChannel, playlist = false) {
        const serverQueue = queue.get(msg.guild.id);
        console.log(video);
        const song = {
                id: video.id,
                title: video.title,
                url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
                durations: video.duration.seconds,
    views: video.views,
        };
        if (!serverQueue) {
                const queueConstruct = {
                        textChannel: msg.channel,
                        voiceChannel: voiceChannel,
                        connection: null,
                        songs: [],
                        volume: 3,
                        playing: true
                };
                queue.set(msg.guild.id, queueConstruct);
 
                queueConstruct.songs.push(song);
 
                try {
                        var connection = await voiceChannel.join();
                        queueConstruct.connection = connection;
                        play(msg.guild, queueConstruct.songs[0]);
                } catch (error) {
                        console.error(`I could not join the voice channel: ${error}`);
                        queue.delete(msg.guild.id);
                        return msg.channel.send(`HATA | Ses kanalına katılamadım: ${error}`);
                }
        } else {
                serverQueue.songs.push(song);
                console.log(serverQueue.songs);
                if (playlist) return undefined;
    else return msg.channel.sendEmbed(new Discord.RichEmbed()
  .setDescription(`<:onayriax:547486994368954389> **${song.title}** adlı şarkı başarıyla kuyruğa eklendi.`)
  .setColor('RANDOM'));
        }
 
        return undefined;
}
 
function play(guild, song) {
        const serverQueue = queue.get(guild.id);
 
        if (!song) {
                serverQueue.voiceChannel.leave();
                queue.delete(guild.id);
                return;
        }
        console.log(serverQueue.songs);
 
        const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
                .on('end', reason => {
                        if (reason === 'Akış yeterince hızlı diğil.') console.log('Şarkı Durduruldu.');
                        else console.log(reason);
                        serverQueue.songs.shift();
                        play(guild, serverQueue.songs[0]);
                })
                .on('error', error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
 
   serverQueue.textChannel.sendEmbed(new Discord.RichEmbed()
  .setAuthor(`Riax | Müzik Başladı`, `http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4fa.png`)
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .addField('Başlık', `[${song.title}](${song.url})`, true)
  .addField("Ses Seviyesi", `${serverQueue.volume}%`, true)                                   
  .addField("Süre", `${song.durationm}:${song.durations}`, true)
  .setColor('#FFFFFF'));
}

client.login(token);