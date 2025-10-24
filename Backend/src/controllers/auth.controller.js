const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function registerController(req, res) {
    const {email, password, role, fullname:{firstname, lastname}} = req.body;
    const isUserExists = await userModel.findOne({email});

    if(isUserExists) {
        return res.status(400).json({message: 'User already exists'});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({email, password: hashedPassword, role, fullname: { firstname, lastname }});
    const token = jwt.sign({id: newUser._id, role}, process.env.JWT_SECRET);
    res.cookie('token', token);
    res.status(201).json({
        message: 'User registered successfully',
        newUser
    });
}

async function loginController(req, res) {
    const {email, password} =req.body;
    const isUserExists = await userModel.findOne({email});

    if(!isUserExists) {
        return res.status(400).json({message: 'User not exists'});
    }
    const isPasswordValid = await bcrypt.compare(password, isUserExists.password);
    if(!isPasswordValid) {
        return res.status(400).json({message: 'Invalid password'});
    }
    const token = jwt.sign({id: isUserExists._id}, process.env.JWT_SECRET);
    res.cookie('token', token);
    res.status(201).json({
        message: 'User logged in successfully'
    });
}

module.exports = {
    registerController,
    loginController
}