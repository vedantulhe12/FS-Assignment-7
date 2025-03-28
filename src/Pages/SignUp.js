import { useState } from "react";
import "./SignUp.css"; // ✅ Import CSS file

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        let newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address";
        if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters long";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const calculatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        setPasswordStrength(strength);
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h1 className="signup-title">Create Account</h1>
                {isSubmitted ? (
                    <div className="success-message">
                        Registration successful! Thank you for signing up.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="signup-field">
                            <label className="signup-label">First Name</label>
                            <input 
                                type="text" 
                                name="firstName" 
                                value={formData.firstName} 
                                onChange={handleChange} 
                                className="signup-input"
                            />
                            {errors.firstName && <p className="signup-error">{errors.firstName}</p>}
                        </div>
                        <div className="signup-field">
                            <label className="signup-label">Last Name</label>
                            <input 
                                type="text" 
                                name="lastName" 
                                value={formData.lastName} 
                                onChange={handleChange} 
                                className="signup-input"
                            />
                            {errors.lastName && <p className="signup-error">{errors.lastName}</p>}
                        </div>
                        <div className="signup-field">
                            <label className="signup-label">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="signup-input"
                            />
                            {errors.email && <p className="signup-error">{errors.email}</p>}
                        </div>
                        <div className="signup-field relative">
                            <label className="signup-label">Password</label>
                            <input 
                                type={passwordVisible ? "text" : "password"} 
                                name="password" 
                                value={formData.password} 
                                onChange={(e) => {
                                    handleChange(e);
                                    calculatePasswordStrength(e.target.value);
                                }}
                                className="signup-input"
                            />
                            {errors.password && <p className="signup-error">{errors.password}</p>}
                            <div className="password-strength">
                                <div className={["", "password-weak", "password-medium", "password-strong", "password-very-strong"][passwordStrength]}></div>
                            </div>
                        </div>
                        <button type="submit" className="signup-button">
                            Create Account
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegistrationForm;
