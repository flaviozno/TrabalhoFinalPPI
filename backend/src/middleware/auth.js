module.exports = async (req, res, next) => {
  if (!req.userId) {
    return res.status(401).json({ message: "Token not provided" });
  }

  return next();
};
