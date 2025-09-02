const User = require('../models/User');

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

module.exports = ctr;
