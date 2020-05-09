// require("../src/db/mongoose");
// const User = require("../src/models/user");

// User.findByIdAndUpdate("5eb2b11946ec1625ac656214", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((count) => console.log(count))
//   .catch((e) => console.log(e));

// const updateAgeAndCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age });
//   const count = await User.countDocuments({ age });
//   return count;
// };

// updateAgeAndCount("5eb2b11946ec1625ac656214", 2)
//   .then((count) => console.log(count))
//   .catch((e) => console.log(e));
