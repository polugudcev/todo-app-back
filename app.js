require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const apiRoutes = require("./src/modules/routes/task");

app.use(cors());

app.use(express.json());
app.use("/", apiRoutes);

const init = () => {
  try {
    mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(8000, () => {
      console.log(`App listening: http://localhost:8000/`);
    });
  } catch (error) {
    console.error("error");
    process.exit(1);
  }
};

init();
