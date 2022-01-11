const mongoose = require('mongoose')
const Schema = mongoose.Schema

let CommentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
    default: 'none',
  },
  created_at: {
    type: Date,
    required: false,
    default: new Date(),
  },
})

let comment = mongoose.model('comment', CommentSchema)

module.exports = comment
