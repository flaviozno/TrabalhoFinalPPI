import UserService from "../services/UserService.js";

class UserController {
  async create(req, res) {
    try {
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
      };

      const response = UserService.create(newUser);
      res.status(201);
      return res.json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || 500)
        .send({ ...error, message: error.message });
    }
  }
  async getAll(req, res){
    try {
      const response = UserService.getAll();
      res.status(201)
      return res.json(response)
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || 500)
        .send({ ...error, message: error.message });
    }
  }
}
export default new UserController();