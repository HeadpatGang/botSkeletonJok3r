//Takes the client from index
const { client } = require('../../index')

client.on('messageCreate', message => {
    client.log(message)
})