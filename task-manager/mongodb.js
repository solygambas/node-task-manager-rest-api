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
  }
);
