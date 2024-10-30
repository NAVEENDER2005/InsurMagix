// routes/userAccountRoutes.js
const express = require('express');
const router = express.Router();
const UserAccount = require('../models/UserAccount'); // Adjust the path according to your structure

// POST route to create a new user account
router.post('/', async (req, res) => {
  const { fullName, phoneNumber, email, address, policyId, insuranceCompany, priorityStatus } = req.body;

  // Validate incoming data
  if (!fullName || !phoneNumber || !email || !address || !policyId || !insuranceCompany || !priorityStatus) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  if (!['verified', 'pending', 'declined'].includes(priorityStatus.toLowerCase())) {
    return res.status(400).json({ message: 'Priority Status must be "verified", "pending", or "declined"' });
  }

  try {
    const newUserAccount = new UserAccount({
      fullName,
      phoneNumber,
      email,
      address,
      policyId,
      insuranceCompany,
      priorityStatus,
    });

    await newUserAccount.save();
    res.status(201).json({ message: 'User account created successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
