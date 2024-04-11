
import mongoose from "mongoose"


const employeeManagementSchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    employmentStatus: { type: String, enum: ['Active', 'Inactive'], required: true },
    employmentType: String,
    employmentStartDate: { type: Date, required: true },
    employmentEndDate: Date,
    supervisorFeedback: String,
    performanceRatings: Number,
});


export default mongoose.model('EmployeeManagement', employeeManagementSchema);