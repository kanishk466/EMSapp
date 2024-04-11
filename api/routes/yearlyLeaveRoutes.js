import express from 'express';

import yearlyLeaveController from '../controllers/yearlyLeaveController.js';

const router = express.Router();

// Define routes
router.post('/', yearlyLeaveController.createYearlyLeave);
router.get('/:id',  yearlyLeaveController.getYearlyLeaveById);
router.put('/:id',  yearlyLeaveController.updateYearlyLeave);
router.delete('/:id', yearlyLeaveController.deleteYearlyLeave);

export default router;
