import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
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
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
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
        <div className={`login-container ${showSignup ? 'flipped' : ''}`}>
            <div className="login-card">
                <div className="card-front">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                    <label htmlFor="login-email">Email:</label>
                    <input
                        type="email"
                        id="login-email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="login-password">Password:</label>
                    <div className="password-input">
                        <input
                        type={showPassword ? 'text' : 'password'}
                        id="login-password"
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
                    <button type="submit" className="btn">
                    Login
                    </button>
                    <p>
                    Don&apos;t have an account?{' '}
                    <button className="link-btn" onClick={toggleSignup}>
                        Signup
                    </button>
                    </p>
                </form>
                </div>
                <div className="card-back">
                <h2>Signup</h2>
                <form onSubmit={handleSignupSubmit}>
                    <div className="form-group">
                    <label htmlFor="signup-email">Email:</label>
                    <input
                        type="email"
                        id="signup-email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="signup-password">Password:</label>
                    <div className="password-input">
                        <input
                        type={showPassword ? 'text' : 'password'}
                        id="signup-password"
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
                    <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    </div>
                    <button type="submit" className="btn">
                    Signup
                    </button>
                    <p>
                    Already have an account?{' '}
                    <button className="link-btn" onClick={toggleSignup}>
                        Login
                    </button>
                    </p>
                </form>
                </div>
            </div>
        </div>
    );
};
    
export default Login;










































































// import { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import './Login.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showSignup, setShowSignup] = useState(false);
//     const [error, setError] = useState('');

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();

//         try {
//         const response = await fetch('http://localhost:3000/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password }),
//         });

//         if (response.ok) {
//             // Login successful, redirect or perform necessary actions
//             console.log('Login successful');
//         } else {
//             // Login failed, handle error
//             const data = await response.json();
//             setError(data.error || 'Login failed');
//         }
//         } catch (error) {
//         console.error('An error occurred during login:', error);
//         setError('An error occurred during login');
//         }
//     };

//     const handleSignupSubmit = async (e) => {
//         e.preventDefault();

//         try {
//         const response = await fetch('http://localhost:3000/signup', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password }),
//         });

//         if (response.ok) {
//             // Signup successful, redirect or perform necessary actions
//             console.log('Signup successful');
//         } else {
//             // Signup failed, handle error
//             const data = await response.json();
//             setError(data.error || 'Signup failed');
//         }
//         } catch (error) {
//         console.error('An error occurred during signup:', error);
//         setError('An error occurred during signup');
//         }
//     };

//     const handleResetPasswordSubmit = async (e) => {
//         e.preventDefault();

//         try {
//         const response = await fetch('http://localhost:3000/reset-password', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email }),
//         });

//         if (response.ok) {
//             // Password reset email sent, handle success
//             console.log('Password reset email sent');
//         } else {
//             // Password reset failed, handle error
//             const data = await response.json();
//             setError(data.error || 'Password reset failed');
//         }
//         } catch (error) {
//         console.error('An error occurred during password reset:', error);
//         setError('An error occurred during password reset');
//         }
//     };

//     const handleLogout = async () => {
//         try {
//         const response = await fetch('http://localhost:3000/logout', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             // Logout successful, perform necessary actions (e.g., clear session, redirect)
//             console.log('Logout successful');
//         } else {
//             // Logout failed, handle error
//             const data = await response.json();
//             setError(data.error || 'Logout failed');
//         }
//         } catch (error) {
//         console.error('An error occurred during logout:', error);
//         setError('An error occurred during logout');
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const toggleSignup = () => {
//         setShowSignup(!showSignup);
//         setError('');
//     };

//     return (
//         <div className="login-container">
//         <div className="login-card">
//             <h2>{showSignup ? 'Signup' : 'Login'}</h2>
//             {error && <p className="error">{error}</p>}
//             {showSignup ? (
//             <form onSubmit={handleSignupSubmit}>
//                 <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" value={email} onChange={handleEmailChange} />
//                 </div>
//                 <div className="form-group">
//                 <label htmlFor="password">New Password:</label>
//                 <input
//                     type={showPassword ? 'text' : 'password'}
//                     id="password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                 />
//                 <div className="password-input">
//                     <input
//                     type={showPassword ? 'text' : 'password'}
//                     id="confirm-password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     />
//                     <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </button>
//                 </div>
//                 </div>
//                 <button type="submit" className="btn">
//                 Signup
//                 </button>
//                 <p>
//                 Already have an account?{' '}
//                 <button className="link-btn" onClick={toggleSignup}>
//                     Login
//                 </button>
//                 </p>
//             </form>
//             ) : (
//             <>
//                 <form onSubmit={handleLoginSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input type="email" id="email" value={email} onChange={handleEmailChange} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <div className="password-input">
//                     <input
//                         type={showPassword ? 'text' : 'password'}
//                         id="password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                     />
//                     <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
//                         {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </button>
//                     </div>
//                 </div>
//                 <button type="submit" className="btn">
//                     Login
//                 </button>
//                 <p>
//                     Don't have an account?{' '}
//                     <button className="link-btn" onClick={toggleSignup}>
//                     Signup
//                     </button>
//                 </p>
//                 <p>
//                     Forgot password?{' '}
//                     <button className="link-btn" onClick={handleResetPasswordSubmit}>
//                     Reset Password
//                     </button>
//                 </p>
//                 </form>
//                 <p>
//                 Logged in as User{' '}
//                 <button className="link-btn" onClick={handleLogout}>
//                     Logout
//                 </button>
//                 </p>
//             </>
//             )}
//         </div>
//         </div>
//     );
// };

// export default Login;

















































































// import { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import './Login.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showSignup, setShowSignup] = useState(false);
//     const [error, setError] = useState('');

//     const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     };

//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost:3000', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//             });

//             if (response.ok) {
//             // Login successful, redirect or perform necessary actions
//             console.log('Login successful');
//             } else {
//             // Login failed, handle error
//             const data = await response.json();
//             setError(data.error || 'Login failed');
//             }
//         } catch (error) {
//             console.error('An error occurred during login:', error);
//             setError('An error occurred during login');
//         }
//     };

//     const handleSignupSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost:3000', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//             });

//             if (response.ok) {
//             // Signup successful, redirect or perform necessary actions
//             console.log('Signup successful');
//             } else {
//             // Signup failed, handle error
//             const data = await response.json();
//             setError(data.error || 'Signup failed');
//             }
//         } catch (error) {
//             console.error('An error occurred during signup:', error);
//             setError('An error occurred during signup');
//         }
//     };

//     const handleLogout = async () => {
//         try {
//         const response = await fetch('http://localhost:3000', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' }
//             // You may need to include the user's token in the headers for authentication
//             // Example: headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
//         });

//         if (response.ok) {
//             // Logout successful, perform necessary actions (e.g., clear session, redirect)
//             console.log('Logout successful');
//         } else {
//             // Logout failed, handle error
//             const data = await response.json();
//             setError(data.error || 'Logout failed');
//         }
//         } catch (error) {
//         console.error('An error occurred during logout:', error);
//         setError('An error occurred during logout');
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const toggleSignup = () => {
//         setShowSignup(!showSignup);
//         setError('');
//     };

//     return (
//         <div className="login-container">
//             <div className="login-card">
//                 <h2>Login</h2>
//                 {error && <p className="error">{error}</p>}
//                 {showSignup ? (
//                 <form onSubmit={handleSignupSubmit}>
//                     <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={handleEmailChange}
//                     />
//                     </div>
//                     <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                         <div className="password-input">
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 id="password"
//                                 value={password}
//                                 onChange={handlePasswordChange}
//                             />
//                             <button
//                                 type="button"
//                                 className="password-toggle"
//                                 onClick={togglePasswordVisibility}
//                                 >
//                                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//                             </button>
//                         </div>
//                     </div>
//                     <button type="submit" className="btn">Signup</button>
//                     <p>
//                         Already have an account?{' '}
//                         <button className="link-btn" onClick={toggleSignup}>
//                             Login
//                         </button>
//                     </p>
//                 </form>
//                 ) : (
//                 <form onSubmit={handleLoginSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={handleEmailChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                         <div className="password-input">
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 id="password"
//                                 value={password}
//                                 onChange={handlePasswordChange}
//                             />
//                             <button
//                                 type="button"
//                                 className="password-toggle"
//                                 onClick={togglePasswordVisibility}
//                                 >
//                                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//                             </button>
//                         </div>
//                     </div>
//                     <button type="submit" className="btn">Login</button>
//                     <p>
//                         Don&apos;t have an account?{' '}
//                         <button className="link-btn" onClick={toggleSignup}>
//                             Signup
//                         </button>
//                     </p>
//                     <p>
//                         Logged in as User{' '}
//                         <button className="link-btn" onClick={handleLogout}>
//                         Logout
//                         </button>
//                     </p>
//                 </form>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Login;


































// import { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import './Login.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showSignup, setShowSignup] = useState(false);
//     const [error, setError] = useState('');

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();

//         try {
//         const response = await fetch('http://localhost:3000/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//         });

//         if (response.ok) {
//             // Login successful, redirect or perform necessary actions
//             console.log('Login successful');
//         } else {
//             // Login failed, handle error
//             const data = await response.json();
//             setError(data.error || 'Login failed');
//         }
//         } catch (error) {
//         console.error('An error occurred during login:', error);
//         setError('An error occurred during login');
//         }
//     };

//     const handleLogout = async () => {
//         try {
//         const response = await fetch('http://localhost:3000/logout', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' }
//             // You may need to include the user's token in the headers for authentication
//             // Example: headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
//         });

//         if (response.ok) {
//             // Logout successful, perform necessary actions (e.g., clear session, redirect)
//             console.log('Logout successful');
//         } else {
//             // Logout failed, handle error
//             const data = await response.json();
//             setError(data.error || 'Logout failed');
//         }
//         } catch (error) {
//         console.error('An error occurred during logout:', error);
//         setError('An error occurred during logout');
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const toggleSignup = () => {
//         setShowSignup(!showSignup);
//         setError('');
//     };

//     return (
//         <div className="login-container">
//         <div className="login-card">
//             {error && <p className="error">{error}</p>}
//             {showSignup ? (
//             // Signup form
//             ) : (
//             // Login form
//             )}
//             {showSignup ? (
//             <button type="submit" className="btn">
//                 Signup
//             </button>
//             ) : (
//             <button type="submit" className="btn">
//                 Login
//             </button>
//             )}
//             {showSignup ? (
//             <p>
//                 Already have an account?{' '}
//                 <button className="link-btn" onClick={toggleSignup}>
//                 Login
//                 </button>
//             </p>
//             ) : (
//             <p>
//                 Don&apos;t have an account?{' '}
//                 <button className="link-btn" onClick={toggleSignup}>
//                 Signup
//                 </button>
//             </p>
//             )}
//             {showSignup ? null : (
//             <p>
//                 Logged in as User{' '}
//                 <button className="link-btn" onClick={handleLogout}>
//                 Logout
//                 </button>
//             </p>
//             )}
//         </div>
//         </div>
//     );
// };

// export default Login;
