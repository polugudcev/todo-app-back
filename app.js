const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const apiRoutes = require("./src/modules/routes/routes");

app.use(cors());

app.use(express.json());
app.use("/", apiRoutes);

const url = 'mongodb+srv://admin:AVP890851200qqq@cluster0.yupbm.mongodb.net/Todo-back?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});


app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});