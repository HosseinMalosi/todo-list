const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true });

app.use(express.json())
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));

const Task = mongoose.model("task", { task: String });

app.get("/api", (req, res) => {
  Task.find((err, task) => {
    res.json(task);
  });
});

app.post("/api", (req, res) => {
  console.log(req.body.data);
  res.send("complete");
});

app.listen(8080, async () => console.log());
