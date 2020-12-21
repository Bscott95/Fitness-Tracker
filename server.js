// req/var decs
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const PORT = process.env.PORT || 3000;
const app = express()

// mogo connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: true,
})
.catch((err) => console.log(err))

// express methods
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//  boot app
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});