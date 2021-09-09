const { User } = require("../models/user");

let auth = (req, res, next) => {
  //인증 로직 구현
  // 1. client cookie에서 token을 가져옴
  let token = req.cookies.x_auth;
  //2. token decode, find user
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
