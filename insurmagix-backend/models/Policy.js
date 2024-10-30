const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
  policyId: { type: String, required: true },
  insuredPersonalId: { type: String, required: true },
  insuranceCompany: { type: String, required: true },
  treatmentCost: { type: Number },
  treatmentDescription: { type: String },
  authorizationStatus: { type: String },
  authorizedAmount: { type: Number },
});

module.exports = mongoose.model('Policy', PolicySchema);
