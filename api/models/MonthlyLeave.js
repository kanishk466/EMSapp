import mongoose from "mongoose";


const monthlyLeaveSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  leaveTaken: Number,
  leaveBalance: Number,
  leaveTypes: [String], // Array of leave types
  leaveApprovalStatus: { type: String, enum: ['Pending', 'Approved', 'Rejected'] },
});

export default mongoose.model('MonthlyLeave', monthlyLeaveSchema);