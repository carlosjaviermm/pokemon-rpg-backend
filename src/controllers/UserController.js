const User = require('../models/User');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs')

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || '12', 10)

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

    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)

  if (duplicatedUsername.length > 0) {

     return res.status(400).json({ error: 'Username already exists' })
     
  } else if (duplicatedEmail.length > 0) {
    
    return res.status(400).json({ error: 'Account with this email already exists' })    
  }

    const users = await User.query().insert({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    })
    const {username, email, id} = users
    res.json({username, email, id});
  } catch (error){
    res.status(500).json({ error: error.message })
  }
}

ctr.logIn = () => async (req, res) => {
  try {
    const {email, password} = req.body

    const userData = await User.query().where('email', email).select(
      'username',
      'email',
      'password'
    ).first()

    const validPassword = await bcrypt.compare(password, userData.password)

    //Credential validaions
    if(userData.length === 0) {
      return res.status(404).json({error: 'The email you entered is not registered'})
    } else if (!validPassword) {
      return res.status(404).json({error: 'The password you entered is wrong for this account, please double check and try again'})
    }

    res.status(200).json({message: `You have succesfully logged in with the acount ${userData.username}`, currentUser: userData.username})

  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = ctr;
