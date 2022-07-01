const mongoose = require("mongoose");
const { Schema } = mongoose;
const taskSchema = new Schema({
  text: String,
  isCheck: Boolean,
});
module.exports = Taks = mongoose.model("Task", taskSchema);
