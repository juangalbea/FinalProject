const express = require('express');
const router  = express.Router();
const Comment = require("../models/Comment");
const Game = require("../models/Game");



router.get('/getgames', (req, res, next) => {
  Game
    .find({})
    
    .then(allGames => {

      let random = Math.floor(Math.random()*allGames.length)

      res.json(allGames[random])
    })
    .catch(e => console.log(e))
});

router.get('/getgamesF', (req, res, next) => {
  Game
    .find({})
    
    .then(allGames => {


      res.json(allGames)
    })
    .catch(e => console.log(e))
});


router.post('/games', (req, res) => {
  const name = req.body.name
  Game
    .create({
      name: name,
      speed: req.body.speed,
      logic: req.body.logic,
      imageID: req.body.imageID,
      platforms:req.body.platforms,
      display: req.body.display
    })
    .then(createdGame => res.json(createdGame))
})

router.put('/games/:gameId', (req, res, next) => {
  Game
    .findByIdAndUpdate(req.params.gameId, req.body)
    .then(x => {
      res.json({"updated": true, _id: req.params.gameId})
    })
});

router.get('/comments', (req, res, next) => {
  Comment
    .find()
    .sort({timestamp: -1})
    .then(allComments => res.json(allComments))
    .catch(e => console.log(e))
});

router.post('/comments', (req, res) => {
  Comment
    .create({
      description: req.body.description,
      userID: req.body.userID,
      // timestamp: new Date(),
      favourited: req.body.favourited
    })
    .then(createdComment => [
      res.json(createdComment)
    ])
})

router.put('/comments/:commentId', (req, res, next) => {
  Comment
    .findByIdAndUpdate(req.params.commentId, req.body)
    .then(x => {
      res.json({"updated": true, _id: req.params.commentId})
    })
});



module.exports = router;
