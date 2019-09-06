const ms = require("ms");

exports.run = (client, message, args, func) => {
  
    var user = message.mentions.users.first();
    if(!user) return message.reply("kullanıcı belirt")
    var role = message.metions.role.first();
    if(!role) return message.reply("rol belirt")
    var süre = args[2]
    if(!süre) return message.reply("dakika cinsinden süre belirt")

    user.addRole(role.id)
    message.reply("kullanıcıya rol verildi")
    
    setTimeout(() => {
    
        user.removeRole(role.id)
        message.channel.send(user + " Süreli rolün doldü")

    }, ms(süre))
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3,
    kategori: "Moderaöt Komutları"
};
  
  exports.help = {
    name: 'temp',
    description: 'Etiketlenen kullanıcıya etiketlenen rolü verir.',
    usage: 'tempRole <@kullanıcı> <@rol> <süre>'
};