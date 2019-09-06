const Discord = require("discord.js");
let xp = require("../xp.json");
exports.run = (client, message, args) => {

  if (!message.guild)
  {
  const ozel = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **UYARI!** ', '`seviye` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozel); }

if (!xp[message.author.id]) {
     xp[message.author.id] = {
     xp: 0,
     level: 1
   };
}
let curxp = xp[message.author.id].xp;
let curlvl = xp[message.author.id].level;
let nxtLvlXp = curlvl * 300;
let difference = nxtLvlXp - curxp;


let lvlEmbed = new Discord.RichEmbed()
  .setTitle(`${message.author.username} kullanıcısının seviye bilgisi`)
  .setColor("RED")
  .setThumbnail(message.author.avatarURL)
  .addField(`<:tac:516293894988890141> **${curlvl}** `,"**SEVİYE**", true)
  .addField(`<:xp:516292946526601227> **${curxp}** `,"**TOPLAM XP**", true)
  .setFooter(`${difference} XP Sonra Seviye Atlayacaksın`,message.author.avatarURL);
let modlog = message.guild.channels.find('name', 'seviye');
if (!modlog) return message.reply('`seviye` kanalını bulamıyorum.');
let rank = message.guild.channels.find('name', 'seviye').sendEmbed(lvlEmbed);

let seviye = new Discord.RichEmbed()
      .setColor(1752220)
      .setDescription("Seviyeniz `#seviye` adlı kanalda oluşturuldu.")
  return message.channel.send(seviye).then(msg => {msg.delete(5000)});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['l'],
  permLevel: 0
};

exports.help = {
  name: 'seviye',
  description: 'Sunucudaki seviyenizi gösterir.',
  usage: 'seviye'
};