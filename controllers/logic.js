const User = require("../models/Schema");


// logic for get all task details
exports.showAllUsers = async (req, res) => {
    try {
        const allUser = await User.find()
        res.status(200).json(allUser)
    }
    catch (err) {
        res.status(401).json(err)
        res.status(500).json({ error: 'Logical Error' });
    }
}



