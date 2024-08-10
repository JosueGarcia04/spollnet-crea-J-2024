import { Student } from "../../models/student.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const credentials = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email === 'coordinador123@gmail.com' && password === 'coorDinadOr2024#') {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ msg: 'Inicio de sesión del admin exitoso', token });
    }

    if (email === 'consejo2024@gmail.com' && password === 'conseJo2024#') {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ msg: 'Inicio de sesión del consejal exitoso', token });
    }

    const student = await Student.findOne({ email });
    if (!student) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
        return res.status(400).json({ msg: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ email: student.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ msg: 'Inicio de sesión del estudiante exitoso', token });
} catch (err) {
    console.error('Error al iniciar sesión:', err);
    res.status(500).json({ msg: 'Error al iniciar sesión', error: err.message });
}
};
