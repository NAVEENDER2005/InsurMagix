// routes/policyRoutes.js
const express = require('express');
const router = express.Router();
const UserAccount = require('../models/UserAccount'); // Adjust this path as needed

// Verify Policy Route
router.post('/verify', async (req, res) => {
    const { policyId, fullName } = req.body; // Use fullName instead of username

    try {
        // Find the user account based on policyId and fullName
        const userAccount = await UserAccount.findOne({ policyId, fullName });

        if (!userAccount) {
            return res.status(404).json({ message: 'User account not found' });
        }

        // Return the priority status from the found user account
        res.status(200).json({ status: userAccount.priorityStatus }); // Using priorityStatus from UserAccount
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
