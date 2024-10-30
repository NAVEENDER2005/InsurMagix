const Policy = require('../models/Policy');

// Verify Policy
exports.verifyPolicy = async (req, res) => {
  const { policyId, insuredPersonalId, insuranceCompany } = req.body;
  
  try {
    const policy = await Policy.findOne({ policyId, insuredPersonalId, insuranceCompany });
    if (!policy) return res.status(404).json({ message: 'Policy not found' });
    
    res.status(200).json({ validityStatus: 'Valid', policy });
  } catch (error) {
    res.status(500).json({ message: 'Policy verification failed', error });
  }
};


exports.submitTreatmentEstimate = async (req, res) => {
  const { policyId, insuredPersonalId, insuranceCompany, treatmentCost, treatmentDescription } = req.body;
  
  try {
    const policy = await Policy.findOne({ policyId, insuredPersonalId, insuranceCompany });
    if (!policy) return res.status(404).json({ message: 'Policy not found' });

    policy.treatmentCost = treatmentCost;
    policy.treatmentDescription = treatmentDescription;
    policy.authorizationStatus = 'Pending';
    await policy.save();
    
    res.status(200).json({ message: 'Treatment estimate submitted successfully', policy });
  } catch (error) {
    res.status(500).json({ message: 'Submission failed', error });
  }
};
 
