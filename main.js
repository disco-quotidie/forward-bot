/*
  | Mostbet signal forward Bot

  | @Author BossBaby-Santa
*/

const TelegramBot = require("node-telegram-bot-api");

const config = require('./config.json');

const bot = new TelegramBot(config.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {

  let sendMessageCalled = false;
  current_action = "";

  console.log(msg);

  if (!sendMessageCalled) {
    bot.sendMessage(
      msg.chat.id,
      "Welcome to our BossBabySanta bot !",
      {
        reply_markup: {
        },
      }
    );

    sendMessageCalled = true;
  }
});


// bot.startPolling();