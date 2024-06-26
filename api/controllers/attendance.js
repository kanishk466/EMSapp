

import Attendance from "../models/Attendance"


export const createAttendance = async (req, res, next) => {
    const newEmployee = new Attendance(req.body);
  
    try {
      const savedEmployee = await newEmployee.save();
      res.status(200).json(savedEmployee);
    } catch (err) {
      next(err);
    }
  };
  
  export const getAllAttendance = async (req, res) => {
    try {
      const employees = await Attendance.find();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  
  
  
  export const updateAttendance = async (req, res, next) => {
    try {
      const updatedEmployee = await Attendance.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedEmployee);
    } catch (err) {
      next(err);
    }
  };
  export const deleteAttendance = async (req, res, next) => {
    try {
      await Attendance.findByIdAndDelete(req.params.id);
      res.status(200).json("Attendance has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  
   export const getEmployeeById = async (req, res) => {
    try {
      const employee = await Attendance.findById(req.params.id);
      if (!employee) {
        return res.status(404).json({ message: 'Attendance not found' });
      }
      res.json(employee);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }


