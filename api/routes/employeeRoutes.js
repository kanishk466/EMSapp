import express from "express";
import {
    createEmployee,
    getAllEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById
} from "../controllers/employeeController.js";

import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin,  createEmployee);
router.get("/",verifyAdmin,getAllEmployee)
router.put('/:id',updateEmployee)
router.delete("/:id",verifyAdmin, deleteEmployee)
// @desc Get employee by ID
router.get("/:id",getEmployeeById)

export default router