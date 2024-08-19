const express = require("express");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const app = express();
dotenv.config();

MongoClient.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  })
  .catch((error) => {
    console.log("ERROR IS : ", error);
  });

const port = 5500;
app.listen(port, () => {
  console.log(`SERVER IS STARTED RUNNING ON PORT ${port}`);
});
