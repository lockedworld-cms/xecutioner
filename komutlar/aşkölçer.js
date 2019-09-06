const Discord = require('discord.js')
exports.run = async (client, message, args) => {

const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4MTU5NjQzMjc4MDM2MTc1MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTY1NDUyMjc4fQ.EsJ5Ay1uJzlPFoDDfROEMSSZeHk3o3s1tJZtZz0cPjU', client) 


dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {

    let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.get(args[0]))
    let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.get(args[1]))
    var s = message.author
    if(member2) {
        var s = member2.user
    }
    if(!member) {
        const embed = new Discord.RichEmbed()
            .setDescription(`Bir Kişi Etiketlemelisin.`)
    .setAuthor('Hata')
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({embed})
        return
    }
    var anasonuc = Math.floor(Math.random() * 101)
    var kalp = ''
    var akalp = ''
    if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
        var c = 0
        for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
            kalp += '❤️'
            c++
        }
        for(var x = c; x < 10; x++) {
            akalp += `🖤`
        }
    } else {
        var kalp = '🖤'
        var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
    }
    var yorum = `Evlenecek Kadar Sevgi Var Aranızda.`
    if(anasonuc < 80) {
        var yorum = 'Biraz Daha Uğraşırsan Olacak.'
    }
    if(anasonuc < 60) {
        var yorum = 'Eh İşte Arada Trip Atıyor.'
    }
    if(anasonuc < 40) {
        var yorum = 'Az Da Olsa Bişeycikler Hissediyor Sana.'
    }
    if(anasonuc < 20) {
        var yorum = 'Maalesef Neredeyse İmkansız.'
    }
    const embed = new Discord.RichEmbed()
        .setAuthor(`${member.user.tag} Ve ${s.tag} Arasındaki Aşk Sonucu.`)
        .setDescription(`Aşk Yüzdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
}
else {
      message.channel.send("```Bu komutu kullanabilmek için 12 saatte bir``` https://discordbots.org/bot/610590157590102250/vote ```sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.```")
    }
  })
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['aşk-ölçer', 'ask-olcer', 'askolcer', 'ask', 'aşk'],
    permLevel: 0
}
exports.help = {
    name: 'aşkölçer',
description: 'İki Kullanıcı Arasındaki Aşkı Ölçer.',
    usage: 'aşkölçer [@Kullanıcı]'
}