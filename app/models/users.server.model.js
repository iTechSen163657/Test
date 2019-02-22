var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var UserSchema = new Schema({
  userId: Number,
  userName: String,
  geo: {
    lat: Number,
    lng: Number
  }
});

mongoose.model("User", UserSchema);
