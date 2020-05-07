// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// // console.log(id);
// // console.log(id.getTimestamp());
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString());
// console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    console.log("Connected correctly to database!");
    const db = client.db(databaseName);
    //
    // CREATE
    //
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Vikram",
    //     age: 26,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user!");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 27,
    //     },
    //     {
    //       name: "Gunther",
    //       age: 28,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user!");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Buy bacon",
    //       completed: true,
    //     },
    //     {
    //       description: "Buy bananas",
    //       completed: false,
    //     },
    //     {
    //       description: "Buy apples",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert task!");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    //
    // READ
    //
    // db.collection("users").findOne({ name: "Jen" }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to fetch!");
    //   }
    //   console.log(user);
    // });
    // db.collection("users").findOne(
    //   { _id: new ObjectID("5eb27581b1565a35cc74ebc4") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch!");
    //     }
    //     console.log(user);
    //   }
    // );
    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     if (error) {
    //       return console.log("Unable to fetch!");
    //     }
    //     console.log(users);
    //   });
    //   .count((error, count) => {
    //     if (error) {
    //       return console.log("Unable to fetch!");
    //     }
    //     console.log(count);
    //   });
    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("5eb26892b98da81cb4a59260") },
    //   (error, task) => {
    //     if (error) {
    //       return console.log("Unable to fetch!");
    //     }
    //     console.log(task);
    //   }
    // );
    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log("Unable to fetch!");
    //     }
    //     console.log(tasks);
    //   });
    //
    // UPDATE
    //
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5eb265ebcc610c2a946a3024"),
    //     },
    //     {
    //       // $set: {
    //       //   name: "Mike",
    //       // },
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error));
    // db.collection("tasks")
    //   .updateMany({ completed: false }, { $set: { completed: true } })
    //   .then((result) => console.log(result.modifiedCount))
    //   .catch((error) => console.log(error));
    //
    // DELETE
    //
    // db.collection("users")
    //   .deleteMany({ age: 27 })
    //   .then((result) => console.log(result.deletedCount))
    //   .catch((error) => console.log(error));
    // db.collection("tasks")
    //   .deleteOne({ description: "Buy apples" })
    //   .then((result) => console.log(result.deletedCount))
    //   .catch((error) => console.log(error));
  }
);
