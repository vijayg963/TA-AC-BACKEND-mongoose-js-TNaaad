var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fieldSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: number,
  user: Schema.Types.ObjectId,
});

var Fields = mongoose.model('Fields', fieldSchema);

module.exports = Fields;
