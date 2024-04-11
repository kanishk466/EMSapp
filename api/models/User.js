// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: [{ type: String, enum: ['admin', 'manager', 'employee'] }]

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

export default mongoose.model('User', userSchema);

