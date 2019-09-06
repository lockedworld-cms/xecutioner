const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4MTU5NjQzMjc4MDM2MTc1MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTY1NDUyMjc4fQ.EsJ5Ay1uJzlPFoDDfROEMSSZeHk3o3s1tJZtZz0cPjU', client) 


dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  
    if (!message.guild.member(client.user).hasPermission("SEND_MESSAGES")) return message.author.send('I don\'t have permission to Send Messages. Please enable send messages for my role!');

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("You Won!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        message.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter('You Lost!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        message.channel.send(embed);
    }
}
  else {
      message.channel.send("```Bu komutu kullanabilmek için 12 saatte bir``` https://discordbots.org/bot/610590157590102250/vote ```sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.```")
    }
  })
};


exports.conf = {
    aliases: []
};

exports.help = {
    name: 'slot',
    description: 'Slot Oyunu Oynatır',
    usage: 'slot'
}