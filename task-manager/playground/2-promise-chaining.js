// require("../src/db/mongoose");
// const Task = require("../src/models/task");

// Task.findByIdAndDelete("5eb2a99a031c14365007a6d9")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((count) => console.log(count))
//   .catch((e) => console.log(e));

// const deleteTaskAndCount = async (id) => {
//   const task = await Task.findByIdAndDelete(id);
//   const count = await Task.countDocuments({ completed: false });
//   return count;
// };

// deleteTaskAndCount("5eb3a0612e32b702e0812b7c")
//   .then((count) => console.log(count))
//   .catch((e) => console.log(e));
