const Discord = require('discord.js');

let botid = ('610590157590102250') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Komutları`)
.addField('x!tr', 'Avatarınıza Türkiye Bayrağı Ekler')
.addField('x!otorolaç', 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.')
.addField('x!otorolkapat', 'Otorol kapatır')
.addField('x!otorolmkapat', 'Otorol mesajını kapatır')
.addField('x!ping', 'Botun pingini gösterir')
.addField('x!sunucubilgi', 'Sunucu hakkında bilgi verir.')
.addField('x!slots', 'Slots oyunu oynatır')
.addField('x!steamfiyat', 'Aradağınız oyunun steamdaki fiyatına bakmanızı sağlar')
.addField('x!sustur', 'İstediğiniz kişiyi  susturur.')
.addField('x!csgo', 'CS:GO kasa açma simülasyonu')
.addField('x!unban', 'İstediğiniz kişinin banını kaldırır.')
.addField('x!uyar', 'İstediğiniz kişiyi uyarır.')
.addField('x!komut', 'Tüm komutları listeler')
.addField('x!çekilişyap', 'Çekiliş yapar.')
.addField('x!öneri', 'bot hakkındaki önerilerinizi bot sahiplerine ulaştırır')
.addField('x!yazı-kanal-aç', 'Bir metin kanalı açar')
.addField('x!saat', 'Şuan saat kaç')
.addField('x!speedtest', 'İnternet Hızınızı Ölçer')
.addField('x!gta', 'GTA Efekti')
.addField('x!intihar-et', 'İntihar Et')
.addField('x!davet-sıralaması', 'En Çok Davet Atanlar')
.addField('x!kapaklaflar', 'Kapak Laflar Koyar')
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/ND4kQkv) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote)`)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'komut2',
  description: '',
  usage: ''
};
   