var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var PostSchema = new Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String
});

mongoose.model("Post", PostSchema);
