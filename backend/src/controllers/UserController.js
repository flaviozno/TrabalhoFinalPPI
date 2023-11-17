const UserService = require("../services/UserService.js");

class UserController {
  async create(req, res) {
    try {
      console.log(req.body);
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: false,
        profilePhotoLink: req.body.photo,
      };

      const response = await UserService.create(newUser);
      res.status(201);
      return res.json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || 500)
        .send({ message: error.message, code: error.code });
    }
  }

  async getAll(req, res) {
    try {
      const response = await UserService.getAll();

      return res.json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || 500)
        .send({ ...error, message: error.message });
    }
  }
}

module.exports = new UserController();
