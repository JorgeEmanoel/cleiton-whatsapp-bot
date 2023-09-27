import qrgenerator from 'qrcode-terminal'
import dotenv from 'dotenv'

dotenv.config()

import { connect } from './config/database.js'
connect()

import { client } from './config/client.js'
import { handlersPiper } from './handlers/handlersPiper.js'
import { logger } from './helpers/logger.js'

client.on('qr', (qr) => {
  logger.debug('QR Code generated: ', qr)
  qrgenerator.generate(qr, { small: true })
});

client.on('message', handlersPiper.handle);
client.initialize();