import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Auth.css';
import ic_email from '../Assets/email.png';
import ic_password from '../Assets/password.png';
import ic_eye from '../Assets/ic_eye.png';
import ic_eye_off from '../Assets/ic_eye_off.png';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/register`, { email, password });
            Swal.fire("Registration Success", response?.data?.info, 'success');
            setEmail("");
            setPassword("");
        } catch (error) {
            Swal.fire("Registration Failed", error.response?.data?.info || "An error occurred", "error");
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
            const { token } = response?.data?.data;
            const { role } = response?.data?.data?.user;

            // Store token and role in localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);

            // Redirect to homepage
            window.location.href = "/";
        } catch (error) {
            Swal.fire("Login Failed", error.response?.data?.info || "An error occurred", "error");
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className="text">
                    WELCOME
                </div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={ic_email} alt="ic_email" />
                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={ic_password} alt="ic_password" />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <img
                        src={showPassword ? ic_eye_off : ic_eye}
                        alt="Toggle Password Visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: 'pointer', marginLeft: '10px', width: '25px', height: '25px' }}
                    />
                </div>
            </div>

            <div className="submit-container">
                <button className="submit" onClick={handleRegister}>
                    Register
                </button>
                <button className="submit" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Auth;
