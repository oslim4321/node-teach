const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide the title or your task"],
    unique: [true, "This task already exist"],
  },
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;
