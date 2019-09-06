const Discord = require('discord.js');
const db = require('quick.db');
const { stripIndents } = require('common-tags');

exports.run = (client, message, params) => {
 // if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:v16:556753819829141507> | Bu komutu kullanmak için **yetkiniz yok!**')
 
  message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor('#FFB900')
                            .setAuthor("Sunucu Kurulum", client.user.avatarURL)
                            .setThumbnail(client.user.avatarURL)
  .setDescription('Sunucu kurulum işlemini **onaylıyor musunuz?**\nBu işlem sunucudaki bütün kanallar ve rolleri silecektir.\n\nKabul ediyorsanız **evet**, etmiyorsanız **hayır** yazın.'))
.then(() => {
  
const filter = m => m.author.id === message.author.id;
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(collected => {
    if (collected.first().content === 'hayır') {
      return message.reply("**Başarıyla iptal edildi!**");
    }});
  
message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then((collected) => {
    if (collected.first().content === 'evet') {
  
   message.guild.channels.forEach(u => {
     u.delete()

})
  
  message.guild.roles.forEach(rols => {
     rols.delete()

})
     
      message.guild.createRole({ name: '-=- Üye', hoist: true, position: 20, permissions: ['CREATE_INSTANT_INVITE', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'CHANGE_NICKNAME'], color: 'RED'})
       message.guild.createRole({ name: '-=- BOT', mentionable: true, hoist: true, position: 20, permissions: ['CREATE_INSTANT_INVITE', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'CHANGE_NICKNAME', 'EMBED_LINKS'], color: '#ff6e00'})
           message.guild.createRole({ name: '-=- Discord Yetkili', mentionable: true, hoist: true, position: 20, permissions: ['CREATE_INSTANT_INVITE', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'VIEW_AUDIT_LOG'], color: '#00ff59'}) 
        message.guild.createRole({ name: '-=- Sunucu Orta', mentionable: true, hoist: true, position: 20, permissions: ['CREATE_INSTANT_INVITE', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'CHANGE_NICKNAME', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'VIEW_AUDIT_LOG', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS'], color: '#0055ff'})
       message.guild.createRole({ name: '-=- Owner', mentionable: true, hoist: true, position: 50, permissions: ['CREATE_INSTANT_INVITE', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'CHANGE_NICKNAME', 'ADMINISTRATOR'], color: '#94ff00'}) 
  
          message.author.send(`${message.author}, Merhaba! Ben **${client.user.username}** Sunucu kurulum **mühendisi!**\n**${message.guild.name}** adlı sunucuyu Şuan kuruyorum. Arkana yaslan ve kahveni al, kurulmasını bekle!`)

      message.guild.createChannel("» Sunucu", "category").then(kategori => {
     message.guild.createChannel("kurallar", "text").then(kurallar => {
message.guild.createChannel("duyurular", "text").then(duyurular => {
message.guild.createChannel("oylamalar", "text").then(oylamalar => {
kurallar.setParent(kategori.id)  
duyurular.setParent(kategori.id)  
oylamalar.setParent(kategori.id)
kurallar.send(stripIndents`
        **1.** Argo kelimeler, küfür vb. şeyler yasaktır. (Aşırı derecede kullanılmadığı sürece serbesttir.) - **KICK + BAN**
        **2.** Rahatsız edici paylaşımlar yapmak yasaktır (Örn: +18, korku, cinsellik vs.). - **UYARI + BAN**
        **3.** Spam yapmak yasaktır. - **UYARI + BAN**
        **4.** Reklam yapmak yasaktır. - **UYARI + BAN**
        **5.** Din, dil, ırk ve siyaset hakkında konuşmak yasaktır. - **UYARI + BAN**
        **6.** Herkes birbirine saygılı davranmalıdır. - **KICK + BAN**
        **7.** Sunucu ayarları hakkında bir değişiklik istenemez. - **KICK**
        **8.** Kimsenin tercihi kimseyi ilgilendirmez. - **KICK**
        **9.** Tartışma çıkarmak, tartışmaya dahil olmak yasaktır. - **KICK**
        **10.** Yönetimce verilen kararlara veya sisteme karşı çıkılamaz. Ancak Abartı kaçılmadığı sürece görüş belirtilebilir. - **KICK**
        **11.** Başkalarını Rahatsız edecek davranışlarda bulunmak yasaktır. - **BAN**
        **12.** Kimse başka bir kişiye üstünlük gösteremez. - **KICK**
        **13.** Aşırı derecede emoji ve büyük harf kullanımı yasaktır. - **KICK + BAN**
        **14.** Ahlaka karşı davranışlar sergilemek yasaktır. - **BAN**
        **15.** Başkalarını rahatsız etmek yasaktır. - **UYARI + BAN**
        **16.** Oynuyor.. kısmına küfür, reklam vb. içerikler yazmak yasaktır. - **UYARI + BAN**
        **17.** İsim başına "!" ve benzeri semboller koymak yasaktır. - **UYARI + KICK**
        **18.** Videodayım odasındaki kişiyi etiketlemek yasaktır. - **UYARI + KICK**
        **19.** Logları kirletecek olaylar (Odalarda hızlı gezmek vb.) yapmak yasaktır. - **UYARI + KICK**
`)
  
  message.guild.createChannel("» Sohbet", "category").then(kategor => {
    message.guild.createChannel("sohbet", "text").then(sohbet => {
    message.guild.createChannel('medya', "text").then(medya => {
    message.guild.createChannel('bot', "text").then(bot => {
sohbet.setParent(kategor.id)
medya.setParent(kategor.id)
bot.setParent(kategor.id)
      
  message.guild.createChannel("» Log", "category").then(katego => {
    message.guild.createChannel("log", "text").then(logg => {
      message.guild.createChannel('mod-log', 'text').then(modlogg => {
      message.guild.createChannel('giriş-çıkış', 'text').then(girişç => {
logg.setParent(katego.id)  
modlogg.setParent(katego.id)  
girişç.setParent(katego.id)
db.set(`memberLogChannel_${message.guild.id}`, logg.id)
db.set(`membermodChannel_${message.guild.id}`, modlogg.id)
db.set(`gKanal_${message.guild.id}`, girişç.id)
        
message.guild.createChannel("» Yetkili", "category").then(kateg => {

message.guild.createChannel("? • Yetkili Chat", "text").then(arda => {
      message.guild.createChannel('? • Yetkili Sohbet', 'voice').then(musab => {
arda.setParent(kateg.id)
musab.setParent(kateg.id)
        
  message.guild.createChannel("» Sesli Sohbet", "category").then(kate => {

message.guild.createChannel("?? • Sohbet #1", "voice").then(hasan => {
      message.guild.createChannel('?? • Sohbet #2', 'voice').then(mustafa => {
hasan.setParent(kate.id)
mustafa.setParent(kate.id)
        
  message.guild.createChannel("» Oyun", "category").then(kat => {

message.guild.createChannel("?? • Oyun #1", "voice").then(emine => {
      message.guild.createChannel('?? • Oyun #2', 'voice').then(filiz => {
emine.setParent(kat.id)
filiz.setParent(kat.id)
        
  message.guild.createChannel("» Müzik", "category").then(ka => {

message.guild.createChannel("?? • Müzik #1", "voice").then(rambo => {
      message.guild.createChannel('?? • Müzik #2', 'voice').then(neblm => {
rambo.setParent(ka.id)
neblm.setParent(ka.id)
        
  message.guild.createChannel("» AFK", "category").then(k => {

message.guild.createChannel("?? • AFK", "voice").then(hmm => {
hmm.setParent(k.id)
      })
})
  })
      })
})
  })
      })
})
  })
      })
})
  })
      })
})
})
      })
      })
    })
  })
    })
      })
    })
  })
})
})
        })
      
  let embed = new Discord.RichEmbed()
  .setColor('#FFB900')
  .setAuthor("Sunucu Kur", client.user.avatarURL)
  .setThumbnail(message.guild.iconURL)
  .setDescription(`Bir sunucuda **Sunucu Kurulumu** yapıldı.\n\n**Sunucu ad:** ${message.guild.name}\n**Sunucu ID:** ${message.guild.id}\n**Kurulumu yapan kişi:** ${message.author.tag}\n**Kurulumu yapan kişi ID:** ${message.author.id}`)
  client.channels.get('').send(embed)
    }
})
  })
}
  
                                                          
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'sunucu-kurulum',
  description: 'Sunucu için gerekli ayarları kurar.',
  usage: 'sunucu-kurulum'
};