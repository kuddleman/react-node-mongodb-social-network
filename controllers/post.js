const Post = require('../models/post')

exports.getPosts = ( req, res ) => {
   const posts = Post.find()
}

exports.createPost = ( req, res ) => {
  const post = new Post(req.body)
  //console.log("CREATING POST:", req.body)
  post.save().then( result => {
    res.status(200).json({
      post: result
    })
  } )
}
