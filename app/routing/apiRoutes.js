var path = require('path');

var friendsData = require('../data/friends.js');
var questions = require('../data/questions.js');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friendsData);
  });

  app.get('/api/questions', function(req, res) {
    res.json(questions);
  });

  app.post('/api/friends', function(req, res) {
    for (var i = 0; i < friendsData.length; i++) {
      if (req.body.name === friendsData[i].name) {
        res.json(false);
      }
    }
  });
};
