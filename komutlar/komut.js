const Discord = require('discord.js');

let botid = ('610590157590102250') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Komutları`)
    .addField('x!sunucu-kur', 'Sunucuyu otomatik kurar odalar oluşturur')
    .addField('x!temizle', '500 Mesaj Siler')
 .addField('x!reklam-taraması', 'Kullanıcıların Oynuyor mesajındaki ve Kullanıcı adlarındaki reklamları tarar.')
.addField('x!atatürk', 'Atatürk')
.addField('x!avatar', 'Avatarınızı gösterir')
.addField('x!aze', 'Avatarınıza Azerbaycan Bayrağı Ekler')
.addField('x!aşkölçer', 'İki Kullanıcı Arasındaki Aşkı Ölçer.')
.addField('x!ban', 'İstediğiniz kişiyi banlar.')
.addField('x!başvuru', 'Kullanıcıyı terfi ettirir.')
.addField('x!kullanıcıbilgim', 'Komutu kullanan kişi hakkında bilgi verir.')
.addField('x!duyuruyap', 'Sunucuda Duyuru yapmanızı sağlar.')
.addField('x!emojiyaz', 'Mesajınızı emoji haline getirir')
.addField('x!espri', 'Espri yapar.')
.addField('x!sahtemesaj', 'Kullanıcıların Adına Sahte Mesaj Gönderebilirsiniz.')
.addField('x!hg-kanal', 'Resimli hoş geldin ayarlar')
    .addField('x!bb-kanal', 'Resimli Hoş çakal ayarlar')
.addField('x!kayıtol', 'Sunucuya kayıt olursunuz!')
.addField('x!kick', 'İstediğiniz kişiyi sunucudan atar.')
.addField('x!kilit', 'Kanalı istediğiniz kadar süreyle kitler.')
.addField('x!temizle', 'Belirlenen miktar mesajı siler.')
    .addField('x!canlı-destek', 'Botla ilgili sıkıntılarda anında destek almanızı sağlar')
    .addField('x!sayaçayarla', 'Sayaç ayarlar')
    .addField('x!sayaçkapat', 'Sayaç sıfırlar')
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/ND4kQkv) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote)`)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'komut',
  description: '',
  usage: ''
};
   