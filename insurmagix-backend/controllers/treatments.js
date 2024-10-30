const Treatment = require('../models/Treatment');

// Function to create a treatment estimate
const createTreatmentEstimate = async (req, res) => {
    try {
        const {
            insuranceCompany,
            policyId,
            insuredPersonalId,
            treatmentDescription,
            treatmentType,
            estimatedAmount
        } = req.body;

        // Validate required fields
        if (!insuranceCompany || !policyId || !insuredPersonalId || !treatmentDescription || !treatmentType || !estimatedAmount) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Handle file upload if present
        const supportingDocuments = req.file ? req.file.path : null; // Store the path to the uploaded file

        const treatmentEstimate = new Treatment({
            insuranceCompany,
            policyId,
            insuredPersonalId,
            treatmentDescription,
            treatmentType,
            estimatedAmount,
            supportingDocuments // Include supporting documents path
        });

        await treatmentEstimate.save();
        res.status(201).json(treatmentEstimate);
    } catch (error) {
        console.error("Error creating treatment estimate:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to get all treatment estimates
const getAllTreatmentEstimates = async (req, res) => {
    try {
        const treatments = await Treatment.find();
        res.status(200).json(treatments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to update the status of a treatment estimate
const updateTreatmentStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body; // Assuming you're sending status in the body

    try {
        const updatedTreatment = await Treatment.findByIdAndUpdate(id, { status }, { new: true });

        if (!updatedTreatment) {
            return res.status(404).json({ message: "Treatment not found" });
        }

        res.status(200).json(updatedTreatment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Exporting the functions
module.exports = {
    createTreatmentEstimate,
    getAllTreatmentEstimates,
    updateTreatmentStatus,
};
