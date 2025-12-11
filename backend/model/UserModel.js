const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
  username: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  createdAt:{ type: Date, default: Date.now }
});

// Hash password before save
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = { UserModel };