import mongoose from 'mongoose';

const PeriodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    }
});

export const Period = mongoose.model('Period', PeriodSchema);
