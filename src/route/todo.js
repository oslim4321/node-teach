const express = require("express");
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("../controller/todo");

const router = express.Router();
// router.get(getTasks).post(createTask);

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:taskId", deleteTask);
router.patch("/:taskId", updateTask);

module.exports = router;
