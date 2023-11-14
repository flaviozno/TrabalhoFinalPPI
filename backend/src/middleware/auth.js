const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).json({ message: "Token not provided" });
  }
  const token = authToken.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "405fe60a5db14040114c0983e14cd5e2");
    req.decodedToken = decoded;
    return next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: "Invalid token" });
  }
};
