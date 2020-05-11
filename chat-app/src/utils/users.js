const users = [];

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
  // clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();
  // validate the data
  if (!username || !room) {
    return { error: "Username and room are required" };
  }
  // check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });
  // validate username
  if (existingUser) {
    return { error: "Username is in use!" };
  }
  // store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};

// addUser({
//   id: 22,
//   username: "Andrew ",
//   room: "South Philly",
// });

// addUser({
//   id: 23,
//   username: "Mike",
//   room: "South Philly",
// });

// addUser({
//   id: 24,
//   username: "Bruce",
//   room: "Center City",
// });

// console.log(users);

// const removed = removeUser(22);
// console.log(removed);
// console.log(users);

// res = addUser({
//   id: 22,
//   username: "Andrew ",
//   room: "South Philly",
// });

// console.log(res);

// console.log(getUser(26));
// console.log(getUser(24));
// console.log(getUsersInRoom("south philly"));
// console.log(getUsersInRoom("paris"));
