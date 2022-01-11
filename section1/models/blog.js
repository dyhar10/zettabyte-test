const mongoose = require('mongoose')
const Schema = mongoose.Schema

let BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
    default: 'none',
  },
  comments: { type: mongoose.Schema.Types.ObjectId, ref: 'comment' },
  created_at: {
    type: Date,
    required: false,
    default: new Date(),
  },
})

let blogDetail = mongoose.model('blog', BlogSchema)

module.exports = blogDetail
