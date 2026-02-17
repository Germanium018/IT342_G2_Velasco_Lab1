import { useState } from 'react';
import AuthInput from '../components/AuthInput';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Added Link and useNavigate

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate(); // Initialize navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sends data to the backend
            await axios.post('http://localhost:8080/api/auth/register', formData);
            
            alert("Success! Redirecting to Log in Page...");

            // 1. Clear the state (empties the "bucket")
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            });

            // 2. Redirect to Login page immediately
            navigate('/login'); 

        } catch (error) {
            console.error("Registration error:", error);
            alert("Failed to register. Please check if the backend is running.");
        }
    };

    return (
        <div className="register-page">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                {/* Added 'value' prop to each AuthInput. 
                   This makes them "Controlled Components" 
                */}
                <AuthInput 
                    type="text" 
                    placeholder="First Name" 
                    value={formData.firstname}
                    onChange={(e) => setFormData({...formData, firstname: e.target.value})} 
                />
                <AuthInput 
                    type="text" 
                    placeholder="Last Name" 
                    value={formData.lastname}
                    onChange={(e) => setFormData({...formData, lastname: e.target.value})} 
                />
                <AuthInput 
                    type="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                />
                <AuthInput 
                    type="password" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})} 
                />
                <button type="submit">Register</button>
            </form>

            {/* Use Link instead of plain text to avoid page reloads */}
            <p className="auth-footer">
                Already have an account? <Link to="/login">Log in</Link>
            </p>
        </div>
    );
};

export default Register;