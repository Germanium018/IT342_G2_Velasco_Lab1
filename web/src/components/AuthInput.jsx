const AuthInput = ({ type, placeholder, value, onChange }) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            className="auth-input"
            required 
        />
    );
};

export default AuthInput;