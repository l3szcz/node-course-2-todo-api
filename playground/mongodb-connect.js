// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, database) => {
    const db = database.db("TodoApp");
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos").insertOne(
    //   { text: "Somethind to do", completed: false },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert todo", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // db.collection("Users").insertOne(
    //   {
    //     name: "Kamil",
    //     age: 25,
    //     location: "Poland"
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert user", err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    database.close();
  }
);
