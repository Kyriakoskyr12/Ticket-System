const Discord = require('discord.js');
const helper = new Discord.Client
const fs = require('fs');
const prefix = '!'
const disbut = require('discord-buttons');
require('discord-buttons')(helper);
let config = require('./config.json')

helper.commands = new Discord.Collection();


helper.on("ready", () => {
    console.log('Bot is online!');
})

helper.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    helper.commands.set(command.name, command);
}

helper.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ticket'){
        helper.commands.get('ticket').execute(message, args, Discord, helper);        
    }

});

helper.login(config.TOKEN);
