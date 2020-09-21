const user = require('../models/user')

exports.signup = async ( req, res) => {
  const userExists = await user.findOne( { email: req.body.email } )
  if( userExists ) return res.status(403).json({
    error: "Email is taken!"
  })
  const user = await new user( req.body )
  await user.save()
  res.status(200).json({ user })
}