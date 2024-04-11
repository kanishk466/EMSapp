
import mongoose from "mongoose";

const yearlyLeaveSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    year: { type: Number, required: true },
    totalLeaveEntitlement: Number,
    leaveTaken: Number,
    leaveBalance: Number,
    leaveTypes: [String], // Array of leave types
    leaveApprovalStatus: { type: String, enum: ['Pending', 'Approved', 'Rejected'] },
});



export default mongoose.model('YearlyLeave', yearlyLeaveSchema);