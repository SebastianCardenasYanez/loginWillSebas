const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    providerId: { type: String, required: true, unique: true },  // ID único del proveedor
    name: { type: String },
    email: { type: String },  // Ya no es único por sí mismo
    profilePicture: { type: String },
    provider: { type: String, required: true },  // google, discord, facebook
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date, default: Date.now }
},{
    collection: "users",
    versionKey: false
});

// Mantener la combinación única de email y provider
userSchema.index({ email: 1, provider: 1 }, { unique: true });

module.exports = mongoose.model('User', userSchema);