// index.ts
const TelegramBot = require('node-telegram-bot-api');
// const { SocksProxyAgent } = require('socks-proxy-agent');

// 在实例化的时候填入自己的socks地址
// const agent = new SocksProxyAgent('socks://localhost:10808')
const token = '7070480803:AAEjTd44jByrYoxHumLBHw23krs799eoevc';

const bot = new TelegramBot(token, {
  polling: true,
  testEnvironment: true,
  request: {
    // agent
  }
});

bot.onText(/\/ping/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'pong');
});