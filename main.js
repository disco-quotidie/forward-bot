/*
  | Mostbet signal forward Bot

  | @Author BossBaby-Santa
*/

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(config.TELEGRAM_TOKEN, { polling: true });


bot.onText(/\/start/, (msg) => {
  let sendMessageCalled = false;
  current_action = "";

  if (!sendMessageCalled) {
    bot.sendMessage(
      msg.chat.id,
      "Welcome to our BossBabySanta bot !",
      {
        reply_markup: {
          keyboard: [
            ["🏆 GET ALL SERVERS"],
            ["🔐 ADD SERVER", "✂️ DELETE SERVER"],
          ],
        },
      }
    );

    sendMessageCalled = true;
  }
});

bot.startPolling();