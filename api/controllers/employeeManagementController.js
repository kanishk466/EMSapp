import EmployeeManagement from "../models/EmployeeManagement.js"



// Controller functions
export const createEmployeeManagement = async (req, res) => {
    try {
        const employeeManagement = new EmployeeManagement(req.body);
        const newEmployeeManagement = await employeeManagement.save();
        res.status(201).json(newEmployeeManagement);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getEmployeeManagementById = async (req, res) => {
    try {
        const employeeManagement = await EmployeeManagement.findById(req.params.id);
        if (employeeManagement == null) {
            return res.status(404).json({ message: 'Employee management data not found' });
        }
        res.json(employeeManagement);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const updateEmployeeManagement = async (req, res) => {
    try {
        const updatedEmployeeManagement = await EmployeeManagement.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedEmployeeManagement);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

export    const deleteEmployeeManagement = async (req, res) => {
    try {
        await EmployeeManagement.findByIdAndDelete(req.params.id);
        res.json({ message: 'Employee management data deleted successfully' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};


