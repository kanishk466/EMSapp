import EmployeeQualification from '../models/employeeQualificationModel.js';

// Controller functions
export const createEmployeeQualification = async (req, res) => {
    try {
        const employeeQualification = new EmployeeQualification(req.body);
        const newEmployeeQualification = await employeeQualification.save();
        res.status(201).json(newEmployeeQualification);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getEmployeeQualificationById = async (req, res) => {
    try {
        const employeeQualification = await EmployeeQualification.findById(req.params.id);
        if (!employeeQualification) {
            return res.status(404).json({ message: 'Employee qualification not found' });
        }
        res.json(employeeQualification);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const updateEmployeeQualification = async (req, res) => {
    try {
        const updatedEmployeeQualification = await EmployeeQualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedEmployeeQualification);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

export const deleteEmployeeQualification = async (req, res) => {
    try {
        await EmployeeQualification.findByIdAndDelete(req.params.id);
        res.json({ message: 'Employee qualification deleted successfully' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
