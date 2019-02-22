module.exports = function(app) {
  var posts = require("../controllers/posts.server.controller");
  app.route("/posts").get(posts.list);
  app.route("/posts/proximity").post(posts.closestUserPosts);
};
