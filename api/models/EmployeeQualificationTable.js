import mongoose from "mongoose";
const employeeQualificationSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  institution: { type: String, required: true },
  graduationYear: { type: Number, required: true },
});


export default mongoose.model('EmployeeQualification', employeeQualificationSchema);