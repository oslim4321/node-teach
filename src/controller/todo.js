const TaskModel = require("../model/todo");

const getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.status(200).json(tasks);

  if (!tasks) {
    res.status(400).json({ status: "Error", message: "couldn't get tasks" });
  }
};

const createTask = async (req, res) => {
  const { title } = req.body;

  console.log(title);
  const task = TaskModel.create({ title });

  if (!task) {
    res.status(404).json({ message: "Task couldn't be created" });
  }

  res
    .status(201)
    .json({ status: "success", message: "Task has been successfully created" });
};

const deleteTask = async (req, res) => {
  const id = req.params.taskId;
  const responsrese = await TaskModel.findByIdAndDelete(id);
  if (!responsrese) {
    return res.status(404).json({ message: "task not found" });
  }

  res.status(200).json({ message: "deleted success" });
};

const updateTask = async (req, res) => {
  const newUpdateData = req.body;
  const id = req.params.taskId;
  const response = await TaskModel.findByIdAndUpdate(id, newUpdateData, {
    new: true,
  });
  console.log(response);
  res.status(200).json({ message: "uodated success" });
};

module.exports = { createTask, getTasks, deleteTask, updateTask };
