const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

// cấu hình file tỉnh ( từ các file trong public)
app.use(express.static(path.join(__dirname, "public")));

//HTTP Logger
app.use(morgan("combined"));

// Template engine
// exrname là định nghĩa lại cái đuôi, ban đầu nó là handlebars, nhưng dài nên định nghĩa lại
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");

// __dirname nó là sẽ đứng tại nơi cái index đang chạy là blog/src
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("new");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});