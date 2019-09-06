const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let guild = message.guild;
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için **Sunucuyu Yönet** yetkisine sahip olmalısın.`);
  
  guild.createChannel(`Kullanıcı Sayısı : ${guild.memberCount}`, 'voice');
  guild.createChannel(`Üye Sayısı : ${guild.members.filter(m => !m.user.bot).size}`, 'voice');
  guild.createChannel(`Bot Sayısı : ${guild.members.filter(m => m.user.bot).size}`, 'voice');

  message.channel.send(`Kanal İstatistik Başarılı.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'panelkur',
  description: 'Kanalda Sunucu İstatistiğini Gösterir.',
  usage: 'kana-istatistik'
};