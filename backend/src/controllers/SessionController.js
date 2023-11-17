const SessionService = require("../services/SessionService");

class SessionController {
  async auth(req, res) {
    try {
      const response = await SessionService.auth(req.body);
      return res.json(response);
    } catch (error) {
      console.log(error)
      return res
        .status(error.status || 500)
        .send({ message: error.message, code: error.code });
    }
  }
}

module.exports = new SessionController();
