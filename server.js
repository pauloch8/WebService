const WebService = require('./src/WebService');

const porta = process.env.PORT || 3000;

const webService = new WebService();
webService.ouvir(porta);

console.log(`Ouvindo na porta ${porta}`);