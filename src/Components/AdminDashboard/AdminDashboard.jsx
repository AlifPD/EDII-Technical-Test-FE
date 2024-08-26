import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(10); // You can change the limit as needed
    const [total, setTotal] = useState(0);

    const BASE_URL = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        fetchData(page, limit);
    }, [page, limit]);

    const fetchData = async (page, limit) => {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage

        try {
            const response = await axios.get(`${BASE_URL}/bio`, {
                params: {
                    page,
                    limit
                },
                headers: {
                    Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
                }
            });
            setData(response.data.data.result);
            setTotal(response.data.data.total);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birthday</th>
                        <th>Birthplace</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{formatDate(user.birthday)}</td>
                                <td>{user.birthplace}</td>
                                <td>{user.position}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span>Page {page}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page * limit >= total}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AdminDashboard;
