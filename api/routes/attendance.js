import  express  from "express";

import {getAllAttendance ,createAttendance ,updateAttendance ,deleteAttendance} from "../controllers/attendance"
const router = express.Router();


// Fetch all attendance records
router.get('/', getAllAttendance);

// Create a new attendance record
router.post('/', createAttendance);

// Update an existing attendance record
router.put('/:id', updateAttendance);

// Delete an attendance record
router.delete('/:id' ,deleteAttendance);




export default router;