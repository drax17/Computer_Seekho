import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaUser, FaLock, FaSignInAlt, FaEye, FaEyeSlash } from 'react-icons/fa';
import "./Login.css";
import loginImage from './login-removebg-preview.png'; 

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const inputChangeHandler = (field, value) => {
        if (field === "username") {
            setUsername(value);
        } else if (field === "password") {
            setPassword(value);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:8080/auth/signIn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Basic " + btoa(username + ":" + password)
                }
            });
            
            if (!response.ok) {
                if (response.status === 401) {
                    toast.error("Invalid credentials..!", { position: "top-center" });
                } else {
                    const errorData = await response.json();
                    toast.error(errorData.message || "Login Failed", { position: "top-center" });
                }
            } else {
                const data = response.headers.get('Authorization');
                sessionStorage.setItem('jwttoken', data);
                toast.success("Login successful..!", { position: "top-center" });
                console.log("Login successful", data);
                onLogin(); 
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <section id="login" className="login-container">
            <Toaster />
            <div className="login-form-container">
                <h2 className="login-title">
                    Login to <span className="highlight">Computer Seekho</span>
                </h2>
                <form className="login-form" onSubmit={loginHandler}>
                    <div className="input-group">
                        <div className="input-icon">
                            <FaUser />
                            <input
                                type="text"
                                required
                                onChange={(e) => inputChangeHandler("username", e.target.value)}
                                value={username}
                                placeholder="Username"
                            />
                        </div>
                        <div className="input-icon">
                            <FaLock />
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                onChange={(e) => inputChangeHandler("password", e.target.value)}
                                value={password}
                                placeholder="Password"
                            />
                            {showPassword ? (
                                <FaEyeSlash className="view-password-icon" onClick={togglePasswordVisibility} />
                            ) : (
                                <FaEye className="view-password-icon" onClick={togglePasswordVisibility} />
                            )}
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="login-button">
                            <FaSignInAlt className="button-icon" /> Login
                        </button>
                    </div>
                </form>
            </div>
            <div className="login-image-container">
                <img src={loginImage} alt="Login" className="login-image" />
            </div>
        </section>
    );
};

export default Login;
