const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true });

app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));

const Task = mongoose.model("task", { task: String ,checked: Boolean});

app.get("/api/get", (req, res) => {
  Task.find((err, task) => {
    res.json(task);
  });
});

app.post("/api/post", (req, res) => {
  const task = new Task({ task: req.body.data ,checked:false});
  task.save().then(() => console.log("succes"));
});

app.post("/api/delete", (req, res) => {
  Task.deleteOne({ _id: req.body._id },undefined,(err) => console.log(err))
});

app.post("/api/update", (req, res) => {
  Task.updateOne({_id: req.body._id },{checked: !req.body.data ? true : false},undefined,(err) => console.log(err))
});

app.listen(8080, async () => console.log());
