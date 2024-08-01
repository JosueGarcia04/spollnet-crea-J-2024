import express from 'express';
import { Student } from '../models/student.mjs'; 

const router = express.Router();

router.post('/check-carnet', async (req, res) => {
    const { carnet } = req.body;

    try {
        const existingStudent = await Student.findOne({ identificador: carnet });
        if (existingStudent) {
            return res.json({ isUnique: false });
        }
        return res.json({ isUnique: true });
    } catch (error) {
        console.error('Error checking carnet uniqueness:', error);
        res.status(500).json({ message: 'Error al verificar el carnet' });
    }
});

export default router;
