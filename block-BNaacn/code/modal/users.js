var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },
    favorites: [String],
    marks: [Number],
    createdAt: { type: Date, default: new Date() },
    pasword: { type: String, minlength: 5, maxlength: 15 },
    address: {
      village: String,
      city: String,
      state: String,
      pin: number,
      user: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);

module.exports = User;
