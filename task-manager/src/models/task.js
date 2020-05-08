const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

// const task = new Task({
//   description: "Buy apples  ",
//   completed: true,
// });

// task
//   .save()
//   .then(() => console.log(task))
//   .catch((error) => console.log("Error!", error));

module.exports = Task;
