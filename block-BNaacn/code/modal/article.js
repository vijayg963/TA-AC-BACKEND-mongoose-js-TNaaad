var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  createdAt: { type: Date, default: new Date() },
  likesNumber: { type: 0, default: 0 },
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
