const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/messaging-platform-backend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});