var User = require("mongoose").model("User");

exports.create = function(req, res, next) {
  console.log(req.body);

  var user = new User();
  user.geo = { lat: req.body.lat, lng: req.body.lng };
  user.userId = req.body.userId;
  user.userName = req.body.userName;

  console.log(user);

  user.save(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};

exports.list = function(req, res, next) {
  User.find(function(err, users) {
    if (err) {
      return next(err);
    } else {
      res.json(users);
    }
  });
};
