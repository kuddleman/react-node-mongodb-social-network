const mongoose = require('mongoose')
const { post } = require('../routes/post')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Post", postSchema)