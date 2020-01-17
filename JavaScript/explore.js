const Twilio = require("twilio");

const client = new Twilio("ACa1ba5a91ce0e0c88f2cd09c1a9e95158", "2cad2fe273b23d306d419d9b339dbfbb");

client.messages.list().then(messages => console.log(`The most recent message is ${messages[0].body}`)).catch(err => console.error(err));

console.log('Gethering your message log');
