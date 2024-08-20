const User = require('../models/User');

class UserService {
  async getUserByEmail(email) {
    return await User.findOne({ email });
  }
}

module.exports = new UserService();