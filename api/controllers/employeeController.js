import Employee from "../models/Employee.js"
import User from "../models/User.js"
export const createEmployee = async (req, res, next) => {
  const newEmployee = new Employee(req.body);

  try {
    const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
  } catch (err) {
    next(err);
  }
};

export const getAllEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}



export const updateEmployee = async (req, res, next) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (err) {
    next(err);
  }
};
export const deleteEmployee = async (req, res, next) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee has been deleted.");
  } catch (err) {
    next(err);
  }
};

 export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}



// Controller function to get currently logged-in user's employee information


