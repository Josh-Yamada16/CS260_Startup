import React from "react";
import './index.css';
import { Link, useNavigate } from "react-router-dom";

export function Index() {
    const navigate = useNavigate();

    function handleSignin(e) {
        e.preventDefault();
        // Here you would normally handle sign-in logic (validation, API call, etc.)
        // For now, just redirect to /home
        navigate('/home');
    }

    return (
        <main className="index-main">
            <div className="row">
                <div className="col-6 left">
                    <h1>Start Your Adventure Here</h1>
                    <p>Create and design your own D&D character or explore and be inspired by other awesome creations.</p>
                </div>
                <div className="col-6 right">
                    <h1 className="welcome-title">Welcome to DnD Character Builder</h1>
                    <form method="get" onSubmit={handleSignin} className="login-form">
                        <p>Don't have an account? <Link to="/signup" className="register-link">Register</Link></p>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormUsername" className="form-label username-label">Enter a Username:</label>
                            <input type="text" className="form-control username-input" id="exampleDropdownFormUsername" placeholder="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormPassword1" className="form-label password-label">Enter a Password:</label>
                            <input type="password" className="form-control password-input" id="exampleDropdownFormPassword1" placeholder="Password" />
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" htmlFor="dropdownCheck">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg login-btn">Login</button>
                    </form>
                </div>
            </div>
        </main>
    );
}