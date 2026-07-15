const jwt = require('jsonwebtoken');

// authenticate user
const verifyToken = (req, res, next) =>
{
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied. No token provided."});

  try
  {
    const verified = jwt.verify(token, process.env.jwtsecret);
    req.user = verified;
    next();
  }
  catch (err)
  {
    res.status(403).json({ message: "Invalid or expired token." });
  }
}

// authorize explicit roles
const authorizeRoles = (...allowedRoles) =>
{
  return(req, res, next) =>
  {
    if(!allowedRoles.includes(req.user.role))
    {
      return res.status(403).json({ message: "Forbidden: you do not have permission"});
    }
    next();
  }
}

module.exports = { verifyToken, authorizeRoles };