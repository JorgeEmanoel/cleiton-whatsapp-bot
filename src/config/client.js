import pkg from 'whatsapp-web.js';
const { Client, NoAuth } = pkg;

const client = new Client({
  authStrategy: new NoAuth()
});

export { client }