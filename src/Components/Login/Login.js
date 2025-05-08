import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.email) newErrors.email = "Please enter your email";
        if (!formData.password) newErrors.password = "Please enter your password";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            // Add submit logic
        } else {
            console.log("Form has errors");
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <p>
                Are you a new member? <a id="signup-link" href="/signup">Sign Up Here</a>
            </p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your.email@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="*************"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <a id="forgot-password" href="#">
                        Forgot Password?
                    </a>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit">Login</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    );
}

export default Login;