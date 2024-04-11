import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  checkInTime: Date,
  checkOutTime: Date,
  totalHoursWorked: Number,
  leaveStatus: { type: String, enum: ['Present', 'Absent', 'Late'], required: true },
  notes: String,
});

export default mongoose.model('Attendance', attendanceSchema);