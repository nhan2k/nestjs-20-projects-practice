const UserService = require('../services/UserService');

class UserController {
  async getUserByEmail(req, res) {
    const user = await UserService.getUserByEmail(req.user.email);

    res.json(user);
  }
}

module.exports = new UserController();