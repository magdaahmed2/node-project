//jwt

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers, query parameters, or cookies
  const token = req.headers.authorization;

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: 'No token provided.' });
  }

  // Verify and decode the token
  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    }

    // Extract the user ID from the decoded token
    req.userId = decoded.userId;

    // Call the next middleware
    next();
  });
};

export default authMiddleware;