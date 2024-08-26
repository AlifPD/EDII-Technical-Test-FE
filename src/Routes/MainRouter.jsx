// src/Routes/MainRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../Components/Homepage/Homepage';
import Biodata from '../Components/Bio/Biodata';
import AdminDashboard from '../Components/AdminDashboard/AdminDashboard';
import Auth from '../Components/Auth/Auth';
import Navbar from '../Components/Navbar/Navbar';

const MainRouter = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    return (
        <Router>
            {token ? (
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        {role !== 'ADMIN' && <Route path="/biodata" element={<Biodata />} />}
                        {role !== 'USER' && <Route path="/admin-dashboard" element={<AdminDashboard />} />}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route path="/auth" element={<Auth />} />
                    <Route path="*" element={<Navigate to="/auth" />} />
                </Routes>
            )}
        </Router>
    );
};

export default MainRouter;
