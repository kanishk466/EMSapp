import MonthlyLeave from '../models/monthlyLeaveModel.js';

// Controller functions
export const createMonthlyLeave = async (req, res) => {
    try {
        const monthlyLeave = new MonthlyLeave(req.body);
        const newMonthlyLeave = await monthlyLeave.save();
        res.status(201).json(newMonthlyLeave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getMonthlyLeaveById = async (req, res) => {
    try {
        const monthlyLeave = await MonthlyLeave.findById(req.params.id);
        if (!monthlyLeave) {
            return res.status(404).json({ message: 'Monthly leave data not found' });
        }
        res.json(monthlyLeave);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateMonthlyLeave = async (req, res) => {
    try {
        const updatedMonthlyLeave = await MonthlyLeave.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMonthlyLeave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteMonthlyLeave = async (req, res) => {
    try {
        await MonthlyLeave.findByIdAndDelete(req.params.id);
        res.json({ message: 'Monthly leave data deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
