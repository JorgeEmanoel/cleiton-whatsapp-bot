const qrgenerator = require('qrcode-terminal')

const client = require('~/config/client')
const handlersPiper = require('~/handlers/handlersPiper')
const logger = require('~/helpers/logger')

client.on('qr', (qr) => {
  logger.debug('QR Code generated: ', qr)
  qrgenerator.generate(qr, { small: true })
});

client.on('message', handlersPiper.handle);
client.initialize();