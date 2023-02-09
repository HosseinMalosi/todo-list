const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017" , {useNewUrlParser: true});

const Task = mongoose.model("task", { task: String, Key: Number });

const task = new Task({ task: "doing something", Key: 12 });

app.get("/api",  (req, res) => {
   Task.find((err, task) => {
    res.json(task);
    console.log(...task);
    console.log(err);
  });
});

app.listen(8080, async () => console.log());
