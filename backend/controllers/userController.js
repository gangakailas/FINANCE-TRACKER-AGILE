const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const generateToken = require("../db/generateToken")

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log('Received data:', { username, email, password }); // Add this line

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields ");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
  });
  console.log('Created user:', user); // Add this line

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});

const authUser = asyncHandler(async(req, res)=> {
  const { email, password }= req.body;

  const user = await User.findOne({email});

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  }else {
    res.status(401);
    throw new Error("Invalid Email or Password")
  }
});

module.exports = {registerUser, authUser};