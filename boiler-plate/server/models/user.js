const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

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
    maxLength: 100,
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
//bcrypt errow function 적용 안됨
userSchema.pre("save", function (next) {
  var user = this;
  if (user.isModified("password")) {
    //비밀번호를 암호화 시키기
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) {
        console.log(err);
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          console.log(err);
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});
userSchema.methods.comparePassword = function (plainPassword, cb) {
  console.log(this.password);
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
userSchema.methods.generateToken = function (cb) {
  let user = this;
  //jsonwebtoken을 이용해서 로그인 시 토큰 생성하기
  let token = jwt.sign(user._id.toHexString(), "secretToken");
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};
userSchema.statics.findByToken = function (token, cb) {
  let user = this;
  //인자로 받은 토큰을 decode
  jwt.verify(token, "secretToken", function (err, decoded) {
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};
const User = mongoose.model("User", userSchema);
module.exports = { User };
