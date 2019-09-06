module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldindiniz **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};