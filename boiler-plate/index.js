const express = require("express");
const app = express();
const port = 9000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://brido:<비밀번호>@boilderplate.qvziz.mongodb.net/brido?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("hi mongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
