
const mongoose = require("mongoose");
const Game = require("../models/Game");
const Comment = require("../models/Comment");



const games = [
  {
    name: "The Hunger Games",
    Speed: 27,
    Logic: 3,
    imageID: "https://pixabay.com/get/55e6d5424b5ba814f6da8c7dda79367f1c36d9e351526c4870297fd19e4dc25db8_1280.jpg",
    platforms: [
      {
        x: 367,
        y: 157,
        w: 334,
        h: 25,
        color: "#fabada"
      },
      {
        x: 167,
        y: 157,
        w: 134,
        h: 15,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 15,
        color: "#fabada"
      },
      {
        x: 267,
        y: 257,
        w: 234,
        h: 15,
        color: "#fabada"
      }
    ],
    timestamp: Date()
  },
  {
    name: "HAHAHAHAHAHA",
    Speed: 27,
    Logic: 3,
    imageID: "https://pixabay.com/get/55e1d0454e56ac14f6da8c7dda79367f1c36d9e351526c4870297fd19e4dc25db8_1280.jpg",
    platforms: [
      {
        x: 67,
        y: 57,
        w: 34,
        h: 15,
        color: "green"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 15,
        color: "green"
      },
      {
        x: 567,
        y: 557,
        w: 534,
        h: 15,
        color: "green"
      },
      {
        x: 167,
        y: 157,
        w: 134,
        h: 15,
        color: "green"
      }
    ],
    timestamp: Date()
  },
  {
    name: "Jesús y Carleto",
    Speed: 27,
    Logic: 3,
    imageID: "https://pixabay.com/get/53e3d3404d54b108f5d08460962936771c38d8e7504c704c732b7dd49249c45a_1280.jpg",
    platforms: [
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      }
    ],
    timestamp: Date()
  },
  {
    name: "Siiiitooo",
    Speed: 27,
    Logic: 3,
    imageID: "https://pixabay.com/get/55e0dc464951a814f6da8c7dda79367f1c36d9e351526c4870297fd29748c159ba_1280.jpg",
    platforms: [
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      }
    ],
    timestamp: Date()
  },
  {
    name: "Datos para ti",
    Speed: 27,
    Logic: 3,
    imageID: "https://pixabay.com/get/57e2dc4b4a53aa14f6da8c7dda79367f1c36d9e351526c4870297fd29748c05ab1_1280.jpg",
    platforms: [
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      },
      {
        x: 67,
        y: 57,
        w: 34,
        h: 45,
        color: "#fabada"
      }
    ],
    timestamp: Date()
  }
]

const comments = [
  {
    description: "Hello cabronazo",
    userID: "iefidnv84389yfsjjh",
    timestamp: Date()
  },
  {
    description: "HAHAHAHAHA",
    userID: "fdvDFVFDHVIUD89834",
    timestamp: Date()
  }
]

mongoose
  .connect("mongodb://localhost/server", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    Game.insertMany(games)
      .then(data => {
        console.log(data);
        console.log("Chachi");
        mongoose.disconnect()
      })
      .catch(err => {
        console.log(err);
      });
      Comment.insertMany(comments)
      .then(data => {
        console.log(data);
        console.log("Chachis");
        mongoose.disconnect()
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
