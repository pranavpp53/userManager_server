const express = require('express');
const { showAllUsers } = require('../controllers/logic');
const upload = require('../multerConfig/storageConfig');
const User = require('../models/Schema');

// Create an object for router class in express
const router = new express.Router();

// Route for adding a new user
router.post('/api/users/addUser', upload.single('image'), async (req, res) => {
    try {
        const { userName, address, email, password } = req.body;
        const image = req.file ? req.file.path : null;

        // Create a new user instance
        const newUser = new User({
            userName,
            address,
            email,
            password,
            image
        });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                userName,
                address,
                email,
                imagePath: newUser.image
            }
        });
    } catch (error) {
        console.error('Error in user registration:', error);
        res.status(500).json({ error: 'An error occurred while registering the user' });
    }
});

// Route for getting all users
router.get('/api/users/getAllUsers', showAllUsers);

module.exports = router;
