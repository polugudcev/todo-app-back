const Task = require("../../../module");

const getAllTasks = async (req, res) => {
  try {
    const result = await Task.find();
    res.send(result);
  } catch (error) {
    console.error("error");
  }
};

const createNewTask = async (req, res) => {
  try {
    const result = await Task.create(req.body);
    res.send(result);
  } catch (error) {
    console.error("error");
  }
};

const changeTaskInfo = async (req, res) => {
  const { _id, text, isCheck } = req.body;
  try {
    const result = await Task.updateOne(
      { _id: _id },
      { $set: { text, isCheck } }
    );
    res.send(result);
  } catch (error) {
    console.error("error");
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await Task.deleteOne(req.body);
    res.send(result);
  } catch (error) {
    console.error("error");
  }
};

module.exports = {
  getAllTasks,
  createNewTask,
  changeTaskInfo,
  deleteTask,
};
