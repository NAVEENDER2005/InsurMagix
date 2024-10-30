const mongoose = require('mongoose');

const UserAccountSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    authorizedAmount: {
        type: Number,
        required: true,
    },
    authorizationStatus: {
        type: String,
        enum: ['Authorized', 'Declined'], // Restrict status values
        required: true,
    },
});

// Check if the model already exists, if not, create it
module.exports = mongoose.models.UserAccount || mongoose.model('UserAccount', UserAccountSchema);
