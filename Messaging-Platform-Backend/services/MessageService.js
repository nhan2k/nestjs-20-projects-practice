const Message = require('../models/Message');

class MessageService {
  async sendMessage(content, sender, recipients) {
    const message = new Message({
      content,
      sender,
      recipients,
    });

    await message.save();

    return message;
  }

  async getAllMessages() {
    return await Message.find().populate('sender').populate('recipients');
  }
}

module.exports = new MessageService();