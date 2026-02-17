import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the JWT and any session data
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="dashboard-wrapper">
            <nav className="navbar">
                <div className="nav-logo">Mini App</div>
                <div className="nav-actions">
                    <button className="logout-btn-red" onClick={handleLogout}>
                        Log out
                    </button>
                </div>
            </nav>

            <div className="dashboard-container">
                {/* Massive 5rem text from your index.css */}
                <h1 className="welcome-text">Welcome, User.</h1>
            </div>
        </div>
    );
};

export default Dashboard;