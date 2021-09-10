const express = require("express");
const app = express();
const port = 9000;
const { User } = require("./models/user");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { auth } = require("./middleware/auth");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const config = require("./config/key");

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("hi mongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/users/register", (req, res) => {
  console.log(req);
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/api/users/login", (req, res) => {
  console.log(req);
  //요청된 이메일을 데이터베이스에서 먼저 찾는다
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        mesasge: "해당 이메일은 존재하지 않습니다.",
      });
    }
    //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 일치한지 확인한다.
    user.comparePassword(req.body.password, (err, isMatch) => {
      console.log(req.body.password);
      console.log(isMatch);
      console.log(err);
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      }
      //비밀번호가 맞으면 Token 생성한다.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        //Token 저장하기 => Cookie or LocalStorage
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

app.get("/api/users/auth", auth, (req, res) => {
  // 여기까지 오면 auth 미들웨어를 에러없이 넘어옴 => Authentication == true 이다.
  res.status(200).json({
    _id: req.user._id,
    idAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
