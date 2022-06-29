const Task = require('../task')

module.exports.getAllTasks = async (req, res) => {
  try {
    const result = await Task.find();
    res.send(result)
  } catch (error) {
    console.log(error);
  }
};

module.exports.createNewTask = async (req, res) => {
  console.log(req.body);
  try {
    const result = await Task.create(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports.changeTaskInfo = async (req, res) => {
  const { _id, text, isCheck } = req.body;
  try {
    const result = await Task.updateOne(
      { _id: _id }, { $set: { text, isCheck } } 
    );
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteTask = async (req, res) => {
  console.log(req.body);
  try {
    const result = await Task.deleteOne(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
