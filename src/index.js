const client = require('~/config/client.js')
const messageHandler = require('~/handlers/messageHandler.js')

client.on('qr', (qr) => {
  // Generate and scan this code with your phone
  console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', messageHandler);

client.initialize();