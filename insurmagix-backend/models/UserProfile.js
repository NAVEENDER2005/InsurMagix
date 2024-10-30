const mongoose = require('mongoose');

// UserProfile Schema
const userProfileSchema = new mongoose.Schema({
  insuranceCompany: String,
  policyID: String,
  personalID: String,
  status: {
    type: String,
    enum: ['VERIFIED', 'PENDING', 'DECLINED'],
    default: 'PENDING'
  }
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
