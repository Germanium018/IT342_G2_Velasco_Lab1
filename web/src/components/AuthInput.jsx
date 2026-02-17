const AuthInput = ({ type, placeholder, value, onChange }) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} // Make sure this line is here!
            onChange={onChange} 
        />
    );
};

export default AuthInput;