var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fieldSchema = new Schema(
  {
    village: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: number,
    user: Schema.Types.ObjectId,
    address: {},
  },
  { timestamps: true }
);

var Fields = mongoose.model('Fields', fieldSchema);

module.exports = Fields;
