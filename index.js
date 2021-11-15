const { Client, Intents, MessageEmbed, Collection } = require('discord.js');
const { 
    //Requires the files inside /modules/index. 
    dummyFile
} = require('./modules/index');
require('dotenv').config();
const discordAuthToken = process.env.discordAuthToken;

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
//const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});

client.once('ready', () => {
    console.log(`Client has logged in on ${client.guilds.cache.size} Guilds`)
})

client.login(discordAuthToken)