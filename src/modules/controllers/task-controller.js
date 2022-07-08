const Task = require("../../model/task");

const getAllTasks = async (req, res) => {
  try {
    const result = await Task.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: "error" });
  }
};

const createNewTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const data = await newTask.save();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ message: "error" });
  }
};

const changeTaskInfo = async (req, res) => {
  const { _id, text } = req.body;
  try {
    const result = await Task.updateOne({ _id: _id }, { $set: { _id, text } });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: "error" });
  }
};

const changeTaskCheckbox = async (req, res) => {
  const { _id, isCheck } = req.body;
  try {
    const result = await Task.updateOne(
      { _id: _id },
      { $set: { _id, isCheck } }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: "error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await Task.deleteOne(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: "error" });
  }
};

module.exports = {
  getAllTasks,
  createNewTask,
  changeTaskInfo,
  changeTaskCheckbox,
  deleteTask
};
