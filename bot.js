const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd' ,member => {
  if(member.guild.id !== '4623472614') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '485545597877').send('Welcome To **Bُubbles** Tumblr .');
},3000);
});
var PrEfix = "$";
client.on('message', message => {
  if (!message.content.startsWith(PrEfix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '442348317737877504') return;
if (message.content.startsWith(PrEfix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(PrEfix + 'ls')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(PrEfix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Baktash_183");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});


client.login("NDQyMzQ4MzE3NzM3ODc3NTA0.DnWDoQ.KcLDYgxfvF2cyK3_Qz5Way2Ogt4");
