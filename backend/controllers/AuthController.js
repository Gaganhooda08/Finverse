const bcrypt = require("bcrypt");
const { UserModel } = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");

const Signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existing = await UserModel.findOne({ email });
    if (existing) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    const user = await UserModel.create({ email, username, password });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: false, // set true in production
      sameSite: "lax",
      secure: false    // set true on HTTPS
    });

    return res.status(201).json({
      success: true,
      message: "User signed up successfully",
      user: { email: user.email, username: user.username }
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Incorrect email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ success: false, message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: false, // set true in production
      sameSite: "lax",
      secure: false
    });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: { email: user.email, username: user.username }
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { Signup, Login };