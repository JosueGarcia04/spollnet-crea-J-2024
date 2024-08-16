import React, { useState, useEffect } from 'react';
import Navbar from '../../components/student-no-logued/general/navBar';
import { Input } from '../../components/student-no-logued/forms/input';
import { Label } from '../../components/student-no-logued/forms/label';
import { Forgot } from '../../components/student-no-logued/forms/Sign up/forgotPassword';
import { LinkRegister } from '../../components/student-no-logued/forms/login/linkForRegister';
import RegisterButton from '../../components/student-no-logued/forms/Sign up/registerButton';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const [mail, setEmail] = useState('');
    const [contra, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                if (decodedToken.exp * 1000 < Date.now()) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error decoding token:', error);
                localStorage.removeItem('token');
                navigate('/login');
            }
        }
    }, [navigate]);

    const validations = () => {
        const errors = {};
        if (!mail) errors.mail = 'Completa el campo de correo electrónico';
        if (!contra) errors.contra = 'Completa el campo de contraseña';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validations();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            let response;
            if (mail === 'coordinador123@gmail.com' && contra === 'coorDinadOr2024#') {
                response = { data: { msg: 'Inicio de sesión de coordinador exitoso', token: 'sample_token' } };
                Swal.fire({
                    title: "¡Bien!",
                    text: response.data.msg,
                    icon: "success"
                }).then(() => {
                    localStorage.setItem('token', response.data.token);
                    navigate('/main', { replace: true });
                });
                return;
            } else if (mail === 'consejo2024@gmail.com' && contra === 'conseJo2024#') {
                response = { data: { msg: 'Inicio de sesión de consejal exitoso', token: 'sample_token' } };
                Swal.fire({
                    title: "¡Bien!",
                    text: response.data.msg,
                    icon: "success"
                }).then(() => {
                    localStorage.setItem('token', response.data.token);
                    navigate('/council', { replace: true });
                });
                return;
            } else {
                response = await axios.post('http://localhost:5000/login', {
                    email: mail,
                    password: contra
                });
            }

            if (response.data.token) {
                Swal.fire({
                    title: "¡Bien!",
                    text: response.data.msg,
                    icon: "success"
                }).then(() => {
                    localStorage.setItem('token', response.data.token);

                    try {
                        const decodedToken = jwtDecode(response.data.token);
                        if (decodedToken.role === 'coordinador') {
                            navigate('/main', { replace: true });
                        } else if (decodedToken.role === 'consejal') {
                            navigate('/council', { replace: true });
                        } else {
                            navigate('/profile', { replace: true });
                        }
                    } catch (error) {
                        console.error('Error decoding token:', error);
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: 'Token inválido.',
                        });
                    }
                });
            } else {
                Swal.fire({
                    title: "Error",
                    text: response.data.msg,
                    icon: "error"
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: 'Error al iniciar sesión',
            });
        }
    };

    return (
        <>
            <Navbar />
            <div className="h-screen bg-black bg-cover bg-center  flex items-center justify-center">
            <div className="flex w-full sm:max-w-6xl bg-gray-800 bg-opacity-25 p-5 rounded-lg shadow-lg">
        <div className="flex-1 flex flex-col justify-center items-center text-center text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Bienvenido a SpollNet</h1>
            <p className="mb-4">Si no tienes una cuenta por favor registrate aquí</p>
            <button
                onClick={() => window.location.href = '/Sign-in'}
                className="px-6 py-3 rounded-full bg-[#E41FAE] text-white font-bold hover:bg-blue-600 transition-colors duration-300"
            >
                Registro
            </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg border border-white w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-neutral-300 mb-6">Iniciar Sesión</h2>
                <div className="mb-4 text-center font-bold">
                    <Label htmlFor="emailAdress">Correo electrónico</Label>
                    <div className="relative">
                        <input
                            id='emailAdress'
                            name='email'
                            type='email'
                            value={mail}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setErrors({ ...errors, mail: '' });
                            }}
                            className={`block w-full px-4 py-2 mt-2 rounded-md bg-white text-black font-bold border transition-colors duration-300 ${errors.mail ? 'border-red-500' : mail ? 'border-green-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.mail && <p className="text-red-500">{errors.mail}</p>}
                    </div>
                </div>
                <div className="mb-4 text-center font-bold">
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="relative">
                        <input
                            id='password'
                            name='password'
                            type='password'
                            value={contra}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setErrors({ ...errors, contra: '' });
                            }}
                            className={`block w-full px-4 py-2 mt-2 rounded-md bg-white text-black font-bold border transition-colors duration-300 ${errors.contra ? 'border-red-500' : contra ? 'border-green-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.contra && <p className="text-red-500">{errors.contra}</p>}
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <RegisterButton text="Iniciar Sesión" />
                </div>
                <div className="mt-4 text-center">
                    <Forgot text="¿Olvidaste tu contraseña?" />
                </div>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">¿Aún no tienes una cuenta? <a href="/Sign-in" className="text-blue-500 hover:underline">Regístrate aquí</a></p>
                </div>
            </form>
        </div>
    </div>
</div>
        </>
    );
};

export default Login;