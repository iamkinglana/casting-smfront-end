<<<<<<< HEAD
=======
import React from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
            });

            if (response.ok) {
            // Login successful, redirect or perform necessary actions
            console.log('Login successful');
            } else {
            // Login failed, handle error
            const data = await response.json();
            setError(data.error || 'Login failed');
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
            setError('An error occurred during login');
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
            });

            if (response.ok) {
            // Signup successful, redirect or perform necessary actions
            console.log('Signup successful');
            } else {
            // Signup failed, handle error
            const data = await response.json();
            setError(data.error || 'Signup failed');
            }
        } catch (error) {
            console.error('An error occurred during signup:', error);
            setError('An error occurred during signup');
        }
};

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleSignup = () => {
        setShowSignup(!showSignup);
        setError('');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                {showSignup ? (
                <form onSubmit={handleSignupSubmit}>
                    <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password:</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={togglePasswordVisibility}
                                >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btn">Signup</button>
                    <p>
                        Already have an account?{' '}
                        <button className="link-btn" onClick={toggleSignup}>
                            Login
                        </button>
                    </p>
                </form>
                ) : (
                <form onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password:</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={togglePasswordVisibility}
                                >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <p>
                        Don&apos;t have an account?{' '}
                        <button className="link-btn" onClick={toggleSignup}>
                            Signup
                        </button>
                    </p>
                </form>
                )}
            </div>
        </div>
    );
};
>>>>>>> e17e529 (Commit)

export default Login;
