require('dotenv').config()
const GotoCLient = require('./structures/GotoClient');

let client = new GotoCLient({
    prefix: '?'
});

client.login(process.config.env.TOKEN);