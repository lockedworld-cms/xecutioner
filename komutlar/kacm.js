const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
const DBL = require('dblapi.js')

exports.run = (client, message, params) => {
  const DBL = require('dblapi.js')
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4MTU5NjQzMjc4MDM2MTc1MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTY1NDUyMjc4fQ.EsJ5Ay1uJzlPFoDDfROEMSSZeHk3o3s1tJZtZz0cPjU', client) 
  
  dbl.hasVoted(message.author.id).then(voted => {
    if(voted) {
var Random = [
'**Olur olmaz kimseler, ne olduğu belirsiz kişiler.**',
'**Birine yük olmak, onun sırtından geçinmek.**',
'**Düşüncesizce hareket etmek.**',
'**Bir kimseye, istediği gibi davranma yetkisi vermek.**',
'**Düzelmek, göze hoş görünmek.**',
'**Özür dilemeyi ifade eden bir deyim.**',
'**Önüne konulan her yemeği çabuk yemek.**',
'**Sır tutmak hali.**',
'**Daima feryat etmek.**',
'**Çok yaşlanmak.**',
'**Sanırım çok şanssızsın :) Trole uğradın, Bu çok düşük oranla geliyor... Deyim istiyorsan komutu bidaha yaz. :) Tabi bidaha bu gelmesse. :joy: **',
'**Bir işte bütün yükü, sorumluluğu yetersiz kişiye bırakma durumunda söylenir..**',
'**Doğruyu söylemesi istenen kimseye verilen söz.**',
'**Olmayacak bir şey söyledin anlamında.**',
'**Sonunda işini kolaylaştırmak.**',
'**Gerçek değerinden fazlaya mal olmak.**',
'**Hafif ve işveli davranmak.**',
'**Hepsi aynı hesaba geliyor anlamında..**',
'**Çok korkulu ve zorba olmak.**',
'**Saygı duyulmayan, hayırsız baba.**',
'**Bir felakete uğramak.**',
'**Kavga sebebi yaratmak.**',
'**Herkesin garip bir tutum içinde bulunduğunu anlatmak için kullanılır.**',
'**Düşünceli kimseleri avutmak için teselli mahiyetinde söylenir.**',
'**İlgisiz davranmak, ilgiyi kesmek.**',
'**Biri tarafından ağzının payı verilmek.**',
'**Karışıklıktan yararlanıp menfaatini kollamak.**',
'**Her şeyi önceden sezmek.**',
'**Bir işte çok eziyet ve sıkıntı çekmek.**',
'**Herkes tarafından bilinmek.**',
'**Ani olarak girmek, dalmak.**',
'**Çok zeki, açıkgöz.**',
'**Sözünü çeviren kimseler için söylenir.**',
'**Durumuna uygun düşmeyen büyük ve olmayacak hayallere kapılmak.**',
'**Sır saklamayan, önüne gelene içini döken.**',
'**Kıyaslanan şeyler arasındaki orantısızlığı belli etmek için kullanılır.**',


];
var atasozuver = Math.floor(Math.random()*Random.length);
const atasozu= new Discord.RichEmbed()
.setDescription(`${Random[atasozuver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(atasozu)
      } else {
      message.channel.send("```Bu komutu kullanabilmek için 12 saatte bir``` https://discordbots.org/bot/610590157590102250/vote ```sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.```")
    }
  }) 
};

  

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'deyim',
description: 'Bot Tarafından Rasgele Deyim Gönderilir. [Bu Komut Burak Arzuhalci Tarafından HeaveN İçin Kodlanmıştır.!]',
usage: 'deyim'
};