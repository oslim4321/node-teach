const mongoose = require("mongoose");

momgpURL = "mongodb://localhost:27017/todo";

const conn = () => {
  mongoose.connect(momgpURL).then((con) => {
    console.log("connect start");
  });
};

module.exports = conn;
