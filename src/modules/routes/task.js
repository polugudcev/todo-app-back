const Router = require('express');
const router = new Router();

const {
  getAllTasks,
  createNewTask,
  changeTaskInfo,
  changeTaskCheckbox,
  deleteTask
} = require('../controllers/task-controller');

router.get('/allTasks', getAllTasks);
router.post('/createTask', createNewTask);
router.patch('/updateTask', changeTaskInfo);
router.patch('/updateCheckbox', changeTaskCheckbox);
router.delete('/deleteTask', deleteTask);

module.exports = router;