import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming user IDs are stored as ObjectIds
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    joiningDate: { type: Date, required: true },
    contactInformation: String,
    address: String,
    salary: { type: Number, required: true },
});

export default mongoose.model('Employee', employeeSchema);