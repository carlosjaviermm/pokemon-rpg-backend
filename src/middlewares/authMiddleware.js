const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const token = req?.headers["authorization"]?.split(" ")[1]; // "Bearer <token>"

  if (!token) {
    return res.status(403).json({ error: "No token provided" });
  }

  jwt.verify(token, 'defaultSecret', (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.user = decoded; // ahora req.user tiene {id, username, email}
    next();
  });
};

module.exports = {verifyToken}