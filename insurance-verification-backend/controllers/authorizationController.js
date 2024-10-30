const Treatment = require('../models/Treatment');
const UserAccount = require('../models/auth');

// Get Authorization Results and check if it can be authorized
exports.checkAuthorization = async (req, res) => {
    const { policyId, insurerPersonalId, insuranceCompany, authorizedAmount } = req.body;

    try {
        const treatment = await Treatment.findOne({ policyId });

        if (!treatment) {
            return res.status(404).json({ message: 'Treatment record not found' });
        }

        const { estimatedAmount } = treatment;
        const amountDifference = estimatedAmount - authorizedAmount;
        let authorizationStatus;

        // Check if authorized amount is greater than or equal to the estimated amount
        if (authorizedAmount >= estimatedAmount) {
            authorizationStatus = 'Authorized';
        } else {
            authorizationStatus = `Declined. Estimated amount exceeds by ${Math.abs(amountDifference)}`;
        }

        res.status(200).json({
            authorizationStatus,
            treatmentDetails: treatment,
            insurerPersonalId,
            insuranceCompany,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Save Authorized Amount and Status
exports.saveAuthorization = async (req, res) => {
    const { userId, policyId, authorizedAmount, insurerPersonalId, insuranceCompany, authorizationStatus } = req.body;

    try {
        const userAccount = new UserAccount({
            userId,
            policyId,
            authorizedAmount,
            insurerPersonalId,
            insuranceCompany,
            authorizationStatus,
        });

        await userAccount.save();

        res.status(201).json({
            message: 'Authorization saved to user account',
            authorization: userAccount,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error saving authorization', error });
    }
};
