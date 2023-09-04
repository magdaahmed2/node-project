

import mongoose from "mongoose";
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      minLength: [3, "name is too short"],
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    isVerified: {
      type: Boolean,
      default:false
    },
    age: {
        type: Number,
        required: true
      },
      gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
      },
      phone: {
        type: String,
        required: true
      },
  }
);

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
  
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
  });
  
  userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;