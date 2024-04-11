import express from 'express';
const router = express.Router();

import * as monthlyLeaveController from '../controllers/monthlyLeaveController.js';

// Define routes
router.post('/',  monthlyLeaveController.createMonthlyLeave);
router.get('/:id',  monthlyLeaveController.getMonthlyLeaveById);
router.put('/:id', monthlyLeaveController.updateMonthlyLeave);
router.delete('/:id', monthlyLeaveController.deleteMonthlyLeave);

export default router;
