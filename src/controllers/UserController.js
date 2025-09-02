const req = require('express/lib/request');
const User = require('../models/User');
const res = require('express/lib/response');

const ctr = {};

// get all users
ctr.getAllUsers = () => async (req, res, next) => {
  try {
    const users = await User.query().select(
      'id',
      'username',
      'email',
      'date_created',
      'b_active'
    );
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

ctr.Signup = () => async (req, res) => {
  try {
    const duplicatedUsername = await User.query().where('username', req.body.username)
    const duplicatedEmail = await User.query().where('email', req.body.email)

    if(duplicatedUsername.length > 0){
      throw new Error('Username already exists')
    } else if (duplicatedEmail.length > 0){
      throw new Error ('Account with this email already exists')
    }

    const users = await User.query().insert({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    const {username, email, id} = users
    res.json({username, email, id});
  } catch (error){
    res.status(500).json({ error: error.message })
  }
}

module.exports = ctr;
