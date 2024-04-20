import express from "express";
import {
    createEmployee,
    getAllEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
   
  
} from "../controllers/employeeController.js";

import{authorizeManager,authorizeEmployee,verifyToken} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", authorizeManager,  createEmployee);

//Get  all employees
router.get("/",authorizeEmployee,getAllEmployee)



router.put('/:id',updateEmployee)
router.delete("/:id", deleteEmployee)
// @desc Get employee by ID
router.get("/:id",getEmployeeById)











export default router