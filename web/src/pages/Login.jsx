import { useState } from 'react';
import AuthInput from '../components/AuthInput';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link here

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Logic as per your Class and Sequence diagrams
            const response = await axios.post('http://localhost:8080/api/auth/login', null, {
                params: { email: credentials.email, password: credentials.password }
            });

            if (response.data !== "Invalid credentials") {
                localStorage.setItem('token', response.data);
                alert("Login Successful!");
                navigate('/dashboard'); 
            } else {
                alert("Invalid Credentials"); //
            }
        } catch (error) {
            console.error("Login Error", error);
        }
    };

    return (
        <div className="login-page">
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
                <AuthInput 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => setCredentials({...credentials, email: e.target.value})} 
                />
                <AuthInput 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})} 
                />
                <button type="submit">Log In</button>
            </form>
            
            {/* New link to fulfill the 'No' path of the Activity Diagram */}
            <p className="auth-footer">
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    );
};

export default Login;