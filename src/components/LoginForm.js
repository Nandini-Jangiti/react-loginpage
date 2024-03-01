import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Welcome from './Welcome';
import "../components/Login.css"


const LoginForm = () => {

    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const formDataError = {};

        if (!formData.username.match(/^[a-zA-Z]+$/)) {
            formDataError.username = 'Username must contain only alphabets';
        }
        if (!formData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
            formDataError.password = 'Password must be at least 8 characters long and contain at least one number, one uppercase letter, and one special character';
        }
        setErrors(formDataError);
        if (Object.keys(formDataError).length === 0) {
            console.log('Form submitted:', formData);
            navigate('/welcome');
            //{ state: { username: formData.username } }
        }
    };

    const isSubmitDisabled = !formData.username || !formData.password;

    return (
        <div className="form-container">
            
           
            <h2>Login</h2>
           
            {/* <Welcome username={formData.username} /> */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    {errors.username && <div className="error-message">{errors.username}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <div className="error-message">{errors.password}</div>}
                </div>

                <div className="btn-container">
                    {/* <Link to={{ pathname: "/welcome", state: { username: formData.username } }}></Link> */}
                    <button type="submit" disabled={isSubmitDisabled}>Login</button>
                </div>
            </form>
            <div className="signuplink">Not a member?<a href=""> Sign Up Now</a></div>
           
        </div>
        

        
    );
};

export default LoginForm;
