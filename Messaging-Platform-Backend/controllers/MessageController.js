const MessageService = require('../services/MessageService');

class MessageController {
  async sendMessage(req, res) {
    const { content } = req.body;
    const sender = await UserService.getUserByEmail(req.user.email);
    const recipients = [await UserService.getUserByEmail('recipient1@example.com'), await UserService.getUserByEmail('recipient2@example.com')];

    const message = await MessageService.sendMessage(content, sender, recipients);

    res.json(message);
  }

  async getAllMessages(req, res) {
    const messages = await MessageService.getAllMessages();

    res.json(messages);
  }
}

module.exports = new MessageController();