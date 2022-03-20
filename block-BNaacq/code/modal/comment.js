var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: String,
    author: Schema.Types.ObjectId,
    article: String,
  },
  { timestamps: true }
);

var Comments = mongoose.model('Comments', commentSchema);

module.exports = Comments;
