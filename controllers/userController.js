const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

// @description Register a user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req,res) => {
    const {username , email,  password } = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable) {
        res.status(400);
        throw new Error('User already registered!');
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password :', hashedPassword);

    const user = await User.create({
        username,
        email,
        password : hashedPassword
    })
    console.log('User' , user);
    if(user){
        res.status(201).json({_id : user.id , email : user.email});
    }
    else{
        res.status(400);
        throw new Error('User data not valid');
    }
    res.json({message : 'Register a user'});
});

// @description Login a usser
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req,res) => {
    res.json({message : 'Login a user'});
});

// @description Current user info
// @route POST /api/users/current
// @access private
const currentUser = asyncHandler(async (req,res) => {
    res.json({message : 'Current user info'});
});


module.exports = {registerUser, loginUser, currentUser}