
// To connect with your mongoDB database
const mongoose = require("mongoose");
// Connecting to database
mongoose.set('strictQuery', true);
mongoose.connect(
  "mongodb://0.0.0.0:27017/sign_in_detail",
  {
    // dbName: "yourDB-name",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) =>
    err ? console.log(err) : console.log(
      "Connected to Ashish database")
);
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");

const playlistschema = new mongoose.Schema({
  user_name: String,
  user_pass: String
})

const Play = mongoose.model('Play',playlistschema)

const Avinash = new Play({
  user_name: "Avinash",
  user_pass: "A@gdhh"
})

Avinash.save()

//----------------------------------------------------------------------------------------------------------------

// // To connect with your mongoDB database
// const mongoose = require("mongoose");
// // Connecting to database
// mongoose.set('strictQuery', true);
// mongoose.connect(
//   "mongodb://0.0.0.0:27017/db_name",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) =>
//     err ? console.log(err) : console.log("Connected to Ashish database")
// );
// const express = require("express");
// const app = express();

// //defining schema
// const playlistschema = new mongoose.Schema({
//     name: String,
//     ctype: String,
//     videos: Number,
//     author: String
// })

// //creating model
// const Playlist = new mongoose.model("Playlist",playlistschema)

// //creating document
// const reactPlaylist = new Playlist({
//     name: "Nodejs",
//     ctype: "BAckend",
//     videos: 50,
//     author: "Avinash"
// })

// reactPlaylist.save()