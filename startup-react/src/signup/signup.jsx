import React from "react";
import './signup.css';
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
    const navigate = useNavigate();

    function handleRegister(e) {
        e.preventDefault();
        // Here you would normally handle registration logic (validation, API call, etc.)
        // For now, just redirect to /home
        navigate('/home');
    }

    return (
        <main>
            <div className="row">
                <div className="col-6 left">
                    <h1>Start Your Adventure Here</h1>
                    <p>Create and design your own D&D character or explore and be inspired by other awesome creations.</p>
                </div>
                <div className="col-6 right">
                    <h1 className="welcome-title">Welcome to DnD Character Builder</h1>
                    <form className="signup-form" onSubmit={handleRegister}>
                        <h5 className="signup-subtitle">Create your account.</h5>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormUsername" className="form-label username-label">Enter a Username:</label>
                            <input type="text" className="form-control username-input" id="exampleDropdownFormUsername" placeholder="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormEmail1" className="form-label email-label">Enter an Email Address:</label>
                            <input type="email" className="form-control email-input" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormPassword1" className="form-label password-label">Enter a Password:</label>
                            <input type="password" className="form-control password-input" id="exampleDropdownFormPassword1" placeholder="Password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormPassword2" className="form-label confirm-label">Confirm Password</label>
                            <input type="password" className="form-control confirm-input" id="exampleDropdownFormPassword2" placeholder="Confirm Password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg signup-btn" style={{marginRight: '10px'}}>Register</button>
                        <Link to="/index" className="login-link">Already have an account?</Link>
                    </form>
                </div>
            </div>
        </main>
    );
}