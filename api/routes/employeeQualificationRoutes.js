import express from 'express';
const router = express.Router();

import * as employeeQualificationController from '../controllers/employeeQualificationController.js';

// Define routes
router.post('/',  employeeQualificationController.createEmployeeQualification);
router.get('/:id',  employeeQualificationController.getEmployeeQualificationById);
router.put('/:id',  employeeQualificationController.updateEmployeeQualification);
router.delete('/:id',  employeeQualificationController.deleteEmployeeQualification);

export default router;
