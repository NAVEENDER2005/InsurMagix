// models/UserAccount.js
const mongoose = require('mongoose');

const userAccountSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  policyId: { type: String, required: true },
  insuranceCompany: { type: String, required: true },
  priorityStatus: { type: String, enum: ['verified', 'pending', 'declined'], required: true },
}, {
  timestamps: true,
});

const UserAccount = mongoose.model('UserAccount', userAccountSchema);
module.exports = UserAccount;
