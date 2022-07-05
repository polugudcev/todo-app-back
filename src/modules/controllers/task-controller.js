const Task = require("../../model/task");

const getAllTasks = async (req, res) => {
  try {
    const result = await Task.find();
    res.send(result);
  } catch (error) {
    res.send(error);
    console.error("error");
  }
};

const createNewTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const data = await newTask.save();
    res.send(data);
  } catch (error) {
    res.send(error);
    console.error("error");
  }
};

const changeTaskInfo = async (req, res) => {
  const { _id, text} = req.body;
  try {
    const result = await Task.updateOne(
      { _id: _id },
      { $set: { _id, text } }
    );
    res.send(result);
  } catch (error) {
    res.send(error);
    console.error("error");
  }
};

const changeTaskCheckbox = async (req, res) => {
  const { _id, isCheck } = req.body;
  try {
    const result = await Task.updateOne(
      { _id: _id },
      { $set: { _id, isCheck } }
    );
    res.send(result);
  } catch (error) {
    res.send(error);
    console.error("error");
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await Task.deleteOne(req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
    console.error("error");
  }
};

module.exports = {
  getAllTasks,
  createNewTask,
  changeTaskInfo,
  changeTaskCheckbox,
  deleteTask,
};
