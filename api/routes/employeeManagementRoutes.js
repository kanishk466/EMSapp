const express = require('express');
const router = express.Router();
import {createEmployeeManagement , updateEmployeeManagement ,getEmployeeManagementById , deleteEmployeeManagement} from "../controllers/employeeManagementController.js"

// Define routes
router.post('/',createEmployeeManagement );
router.get('/:id',getEmployeeManagementById );
router.put('/:id',updateEmployeeManagement );
router.delete('/:id',deleteEmployeeManagement);

module.exports = router;
