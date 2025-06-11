import React, { useState } from 'react';
import '../../styles/LoginPage.css';

import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = formData;

        // Simple validation
        if (!email || !password) {
            setError('All fields are required.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        if (isSignUp) {
            alert('Sign up successful!');
            // Here you'd normally store user info or send to backend
        } else {
            alert('Login successful!');
        }

        navigate('/'); // redirect to home
    };

    return (
        <div className="login-container">
            <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

                <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
            </form>

            <p
                className="toggle-link"
                onClick={() => setIsSignUp(prev => !prev)}
            >
                {isSignUp
                    ? 'Already have an account? Sign In'
                    : "Don't have an account? Sign Up"}
            </p>
        </div>
    );
};

export default LoginPage;
