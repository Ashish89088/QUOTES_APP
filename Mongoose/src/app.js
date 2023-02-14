// To connect with your mongoDB database
const mongoose = require("mongoose");
// Connecting to database
mongoose.set('strictQuery', true);
mongoose.connect(
  "mongodb://0.0.0.0:27017/db_name",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) =>
    err ? console.log(err) : console.log("Connected to Ashish database")
);
const express = require("express");
const app = express();

//defining schema
const playlistschema = new mongoose.Schema({
  name: String,
  ctype: String,
  videos: Number,
  author: String
})

// collection creation
const Playlist = new mongoose.model("Playlist", playlistschema)

const createDocument = async() => {
  try {
    const js = new Playlist({
      name: "js",
      ctype: "BAckend",
      videos: 50,
      author: "Avinash"
    })
    const nodePlaylist = new Playlist({
      name: "Nodejs",
      ctype: "BAckend",
      videos: 90,
      author: "Ashish"
    })
    const reactPlaylist = new Playlist({
      name: "reactjs",
      ctype: "BAckend",
      videos: 30,
      author: "Avinash"
    })

    const result = await Playlist.insertMany([js,nodePlaylist,reactPlaylist])

    console.log(result)

  } catch (error) {
    console.log(error)
  }
}


createDocument()



// const rp = new Playlist({
//   name: "js",
//   ctype: "BAckend",
//   videos: 50,
//   author: "Avinash"
// })
// const r = rp.save();
// console.log(r);





// const createdocument = async() => {
//   try {
//     const rp = new Playlist({
//       name: "js",
//       ctype: "BAckend",
//       videos: 50,
//       author: "Avinash"
//     })
//     const r = rp.insert((err,doc)=>{
//       console.log(doc)
//     });
//     // console.log(r)
//   } catch (err) {
//     console.log(err)
//   }
// }