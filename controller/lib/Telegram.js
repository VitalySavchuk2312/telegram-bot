const { axiosInstance } = require("./axios");

function sendMessage(messageObj, messageText) {
  return axiosInstance.get("sendMessage", {
    chat_id: messageObj.chat.id,
    text: messageText,
  });
}

function handleMessage(messageObj) {
  const messageText = messageObj.text || "";

  if (messageText.charAt(0) === "/") {
    const command = messageText.substr(1);
    switch (command) {
      case "start":
        return sendMessage(
          messageObj,
          "Привіт, я бот. Напишіть ваше повідомлення!"
        );
      default:
        return sendMessage(messageObj, "Невідома команда");
    }
  } else {
    return sendMessage(messageObj, "Що там?");
  }
}

module.exports = { handleMessage };
