const Twilio = require("twilio");

const client = new Twilio("AC8", "2b");

client.messages.list().then(messages => console.log(`The most recent message is ${messages[0].body}`)).catch(err => console.error(err));

console.log('Gethering your message log');
