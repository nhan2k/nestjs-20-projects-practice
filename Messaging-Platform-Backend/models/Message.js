const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: String,
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  recipients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Message', messageSchema);