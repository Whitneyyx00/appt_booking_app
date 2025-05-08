import React, { useState } from "react";
import "./Sign_Up.css";

function SignUp() {
    const [formData, setFormData] = useState({
        role: '',
        name: '',
        phone: '',
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
        if (!formData.role) newErrors.role = "Please select a role";
        if (!formData.name) newErrors.name = "Please enter your name";
        if (!formData.phone) {
            newErrors.phone = "Please enter your phone number";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be 10 digits";
        }
        if (!formData.email) newErrors.email = "Please enter your email";
        if (!formData.password) newErrors.password = "Please enter your password";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            // Add submit logic here
        } else {
            console.log("Form has errors");
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <p>Already a member? <a className="login-link" href="/login">Login</a></p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select id="role" name="role" value={formData.role} onChange={handleChange} required>
                        <option value="">Select Role</option>
                        <option value="doctor">Doctor</option>
                        <option value="patient">Patient</option>
                        <option value="admin">Admin</option>
                    </select>
                    {errors.role && <p className="error">{errors.role}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter Your Full Name" value={formData.name} onChange={handleChange} required />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number" value={formData.phone} onChange={handleChange} required />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleChange} required />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    );
}

export default SignUp;