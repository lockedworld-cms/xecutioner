const Discord = require('discord.js');
var request = require('request');

exports.run = (client, message, args) => {
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4MTU5NjQzMjc4MDM2MTc1MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTY1NDUyMjc4fQ.EsJ5Ay1uJzlPFoDDfROEMSSZeHk3o3s1tJZtZz0cPjU', client) 


dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
request(`http://aws.random.cat/meow`, function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
        var info = JSON.parse(body);
          let catembed = new Discord.RichEmbed()
          .setColor("#7289DA")
          .setTitle("MMİİİYYAAAVVVV 🐱")
          .setImage(info.file);

  message.channel.send(catembed);
    }
});
      } else {
        message.channel.send("```Bu komutu kullanabilmek için 12 saatte bir``` https://discordbots.org/bot/610590157590102250/vote ```sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç  dakika sürebilir, lütfen bekleyin.```")
      }
  })
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kedi'],
  permLevel: 0
};

exports.help = {
    name: 'kedi',
  description: 'Random Kedi Fotografi Atar.',
  usage: 'cat'
};