var path = require('path');

var friendsData = require('../data/friends.js');
var questions = require('../data/questions.js');

var friends = [];

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friendsData);
  });

  app.get('/api/questions', function(req, res) {
    res.json(questions);
  });

  app.post('/api/friends', function(req, res) {
    console.log(req.body);
    if (!check()) {
      friendsData.push(req.body);
      console.log(friendsData);
      res.json(true);
    } else {
      res.json(false);
    }
    function check() {
      for (var i = 0; i < friendsData.length; i++) {
        if (req.body.name === friendsData[i].name) {
          console.log('This user already exists in the database');
          return false;
        }
      }
    }
  });
};
