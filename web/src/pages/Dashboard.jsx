import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) navigate('/login'); // Redirect if not authenticated
    }, [navigate]);

    const handleLogout = async () => {
        try {
            // Trigger the handleLogout() logic in your Class Diagram
            await axios.post('http://localhost:8080/api/auth/logout');
            localStorage.removeItem('token');
            alert("Logged out successfully");
            navigate('/login'); // Redirect to Log in Page
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <div className="auth-page"> {/* Reusing your centered CSS */}
            <h2>User Profile</h2>
            <div className="profile-info">
                <p><strong>Status:</strong> Authenticated</p>
                <p>Welcome to your protected dashboard!</p>
            </div>
            <button onClick={handleLogout} style={{ backgroundColor: '#dc3545' }}>
                Log Out
            </button>
        </div>
    );
};

export default Dashboard;