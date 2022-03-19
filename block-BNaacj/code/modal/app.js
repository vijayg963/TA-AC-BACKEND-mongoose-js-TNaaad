var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, lowercase: true },
  age: { type: Number, min: 18 },
  favorites: [String],
  marks: [Number],
  createdAt: { min: 1, max: 31 },
  pasword: { minlength: 5, maxlength: 15 },
  address: {
    village: String,
    city: String,
    state: String,
    pin: number,
    user: Schema.Types.ObjectId,
  },
});
