import { useState } from 'react';
import AuthInput from '../components/AuthInput';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Backend now uses RequestParams for email and password
            const response = await axios.post('http://localhost:8080/api/auth/login', null, {
                params: { email: credentials.email, password: credentials.password }
            });

            // Check for the token inside the returned Map object
            if (response.data && response.data.token) {
                // 1. Store the actual signed JWT
                localStorage.setItem('token', response.data.token);
                
                alert("Login Successful!");
                navigate('/dashboard'); 
            }
        } catch (error) {
            console.error("Login Error", error);
            // Specifically handling 401 Unauthorized errors from the backend
            alert("Invalid Credentials. Please try again.");
        }
    };

    return (
        <div className="login-page">
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
                <AuthInput 
                    type="email" 
                    placeholder="Email" 
                    value={credentials.email}
                    onChange={(e) => setCredentials({...credentials, email: e.target.value})} 
                />
                <AuthInput 
                    type="password" 
                    placeholder="Password" 
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})} 
                />
                <button type="submit">Log In</button>
            </form>
            
            <p className="auth-footer">
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    );
};

export default Login;