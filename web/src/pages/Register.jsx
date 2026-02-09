import { useState } from 'react';
import AuthInput from '../components/AuthInput';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '', //
        lastname: '',  //
        email: '',     //
        password: ''   //
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Calls the /register endpoint defined in your Class Diagram
        await axios.post('http://localhost:8080/api/auth/register', formData);
        alert("Success! Redirecting to Log in Page..."); //
    };

    return (
        <div className="register-page">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <AuthInput type="text" placeholder="First Name" onChange={(e) => setFormData({...formData, firstname: e.target.value})} />
                <AuthInput type="text" placeholder="Last Name" onChange={(e) => setFormData({...formData, lastname: e.target.value})} />
                <AuthInput type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <AuthInput type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;