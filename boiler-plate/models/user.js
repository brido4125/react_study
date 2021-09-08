const mongoose = require("mongoose");
const bycrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    maxLength: 8,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});
userSchema.pre("save", function (next) {
  var user = this;
  if (user.isModified("password")) {
    //비밀번호를 암호화 시키기
    bycrypt.genSalt(saltRounds, function (err, salt) {
      if (err) {
        console.log(err);
        return next(err);
      }
      bycrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          console.log(err);
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  }
});
const User = mongoose.model("User", userSchema);
module.exports = { User };
