const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

// Verifies cookie token and returns {success, user}
const userVerification = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.json({ success: false });

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) return res.json({ success: false });
      const user = await UserModel.findById(data.id);
      if (user) {
        return res.json({
          success: true,
          user: { email: user.email, username: user.username }
        });
      }
      return res.json({ success: false });
    });
  } catch (err) {
    console.error("Verification error:", err);
    return res.json({ success: false });
  }
};

// Protects routes by requiring a valid token
const requireAuth = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });
  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
    if (err) return res.status(401).json({ success: false, message: "Invalid token" });
    req.userId = data.id;
    next();
  });
};

module.exports = { userVerification, requireAuth };