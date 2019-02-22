var Post = require("mongoose").model("Post");
var User = require("mongoose").model("User");

//create and insert the new post data into posts collection.
// exports.create = function(req, res, next) {
//   console.log(req.body);

//   var post = new Post(req.body);

//   console.log(post);

//   post.save(function(err) {
//     if (err) {
//       return next(err);
//     } else {
//       res.json(post);
//     }
//   });
// };

//send the list of all users
exports.list = function(req, res, next) {
  Post.find(function(err, posts) {
    if (err) {
      return next(err);
    } else {
      res.json(posts);
    }
  });
};

//send all post data of the nearest user
exports.closestUserPosts = function(req, res, next) {
  var geo = req.body.geo;

  var distance = [];
  User.find((err, users) => {
    if (err) {
      return next(err);
    } else {
      for (var i = 0; i < users.length; i++) {
        distance.push({
          distance: Math.sqrt(
            Math.pow(users[i].geo.lat - geo.lat, 2) +
              Math.pow(users[i].geo.lng - geo.lng, 2)
          ),
          user: users[i]
        });
      }
      var result = distance.reduce((minUser, user) => {
        minUser = minUser.distance < user.distance ? minUser : user;
        return minUser;
      }, []);

      console.log(result.user.userId);
      Post.find({ userId: result.user.userId }, function(err, posts) {
        if (err) {
          return next(err);
        } else {
          console.log(posts);
          posts.forEach(element => {
            element.userId *= 2;
          });

          res.json(posts);
        }
      });
    }
  });
};
