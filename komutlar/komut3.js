const Discord = require('discord.js');

let botid = ('610590157590102250') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Komutları`)
.addField('x!rolinfo', 'Rol hakkında info verir')
    .addField('x!boks-maknesi', 'Boks Makinesine vurur')
    .addField('x!kedi', 'Rastgele Kedi resmi atar')
    .addField('x!15tem-çerçeve', '15 Temmuz Çerçevesi Ekler')
    .addField('x!seviye', 'Seviye sistemi')
    .addField('x!sigara', 'Sigara içer')
    .addField('x!sunucumutanıt', 'Sunucunuzu Destek Sunucumuzda Tanıtır')
    .addField('x!tag', 'Sunucu Tag`ını ayarlar')
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
  name: 'komut3',
  description: '',
  usage: ''
};
   