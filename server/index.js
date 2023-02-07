const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017");

const Task = mongoose.model("task", { task: String, Key: Number });

const newTask = () => {
  const task = new Task({ task: "doing something", Key: 12 });

  return task;
};

app.listen(8080, async () => console.log("added"));
