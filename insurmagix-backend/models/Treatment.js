// models/Treatment.js
const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
    insuranceCompany: { type: String, required: true },
    policyId: { type: String, required: true },
    insuredPersonalId: { type: String, required: true },
    treatmentDescription: { type: String, required: true },
    treatmentType: { type: String, required: true },
    estimatedAmount: { type: Number, required: true },
    supportingDocuments: { type: String }, // Store the path to the supporting document
}, { timestamps: true });

module.exports = mongoose.model('Treatment', treatmentSchema);
