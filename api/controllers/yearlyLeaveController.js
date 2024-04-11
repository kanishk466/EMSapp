import YearlyLeave from '../models/yearlyLeaveModel.js';

const createYearlyLeave = async (req, res, next) => {
    try {
        const yearlyLeave = new YearlyLeave(req.body);
        const newYearlyLeave = await yearlyLeave.save();
        res.status(201).json(newYearlyLeave);
    } catch (err) {
        next(err); // Pass error to error handling middleware
    }
};

const getYearlyLeaveById = async (req, res, next) => {
    try {
        const yearlyLeave = await YearlyLeave.findById(req.params.id);
        if (!yearlyLeave) {
            return res.status(404).json({ message: 'Yearly leave not found' });
        }
        res.json(yearlyLeave);
    } catch (err) {
        next(err); // Pass error to error handling middleware
    }
};

const updateYearlyLeave = async (req, res, next) => {
    try {
        const updatedYearlyLeave = await YearlyLeave.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedYearlyLeave);
    } catch (err) {
        next(err); // Pass error to error handling middleware
    }
};

const deleteYearlyLeave = async (req, res, next) => {
    try {
        await YearlyLeave.findByIdAndDelete(req.params.id);
        res.json({ message: 'Yearly leave deleted successfully' });
    } catch (err) {
        next(err); // Pass error to error handling middleware
    }
};

export default {
    createYearlyLeave,
    getYearlyLeaveById,
    updateYearlyLeave,
    deleteYearlyLeave
};
