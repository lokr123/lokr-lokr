const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://bot-lok.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت

const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
 //كود للتجربة



//  الوصف :كود لو شخص اخذ رتبة البوت يقوله بالخاص حصلت رتبة في كذا سيرفر مع اسم الرتبة:1•  

client.on('guildMemberUpdate', (oldMember, newMember,) => {
if(oldMember.roles.size < newMember.roles.size) {
 let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
            let hector = new Discord.RichEmbed()
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('BLACK')
            .setDescription(`✅ تم اعطائك رتبة \n**الرتبة:** \`\`${role.name}\`\n **السيرفر:** ${newMember.guild.name}`)
            .setTimestamp()
            newMember.user.send(hector);
}   
});




//  الوصف : كود تغير الحالة كل شوي:2•  


client.on('ready', () => {//KinG ❥#5451 , Tσxic Cσdes
console.log(`servers: [ " ${client.guilds.size} " ] Users: [ " ${client.users.size} " ]`);
let st = ["%help للمساعدة ", "%invite "];
setInterval(function() {
  let status = st[Math.floor(Math.random() * st.length)];
  client.user.setActivity(status, "https://www.twitch.tv/idk"); //  بدل الرابط PLAYING WATCHING  LISTENING  هنا اذا تبيه يكون بلاي او واتش او ليسنت
}, 3000) // هنا تكتب الوقت الي تبيه يتغير فيه مثل كل 5 ثواني وكذا                                                                                                           
})//KinG ❥#5451 , Tσxic Cσdes




//  الوصف :امر هيلب بمجرد ما تكتب الهيلب يحط رياكت عرسالتك ويرسلك الاوامر الي انت تختارها:3•

client.on('message', msg => {
  if (msg.content === "%help") {
msg.react("✅");
    msg.author.send('اوامر بوتك');
  }
});
//BY 77
// BY 77 
// BY 77 





// 4:الوصف : كود رابط السيرفر انقليزي•

 client.on('message', msg => {
  if (msg.content === "%invite") {
msg.react("✅");
    msg.author.send('رابط https://discord.gg/nwDfmWy');
  }
});
//BY 77
// BY 77 
// BY 77 




// 5:الوصف : كود رابط السيرفر عربي•

client.on('message', msg => {
  if (msg.content === "%دعوه") {
msg.react("✅");
    msg.author.send('رابط https://discord.gg/nwDfmWy');
  }
});
//BY 77
// BY 77 
// BY 77 








// الوصف : اذا حد منشن البوت يقول شتبي و كذا على حسب طلب:6•

client.on('message', message => {
  var mentionbot = [
    `<@${message.author.id}>, شتبي`,
    `<@${message.author.id}>, ماعندك احد غيري تزعجه    `
  ]   
    if (message.author.bot) return;
    if (message.isMentioned(client.user))

message.channel.send(`${mentionbot[Math.floor(Math.random() * mentionbot.length)]}`);

});














//تحديث رقم 3