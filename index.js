const express = require('express');
const { resolve } = require('path');
require("dotenv").config()
const mongoose=require("mongoose")
require("dotenv").config()


const connection=mongoose.connect(process.env.mongodb)
.then(()=>console.log("connected to MongoDB"))
.catch(err=>console.log(err))
module.exports=connection

const app = express();
const port = process.env.PORT

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});