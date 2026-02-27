import React from "react";
import './authPage.css';
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

export function Index() {
    const navigate = useNavigate();

    function handleAuth({ username, password, name, mode }) {
        // Here you would normally handle login/signup logic (validation, API call, etc.)
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
                    <AuthForm onAuth={handleAuth} />
                </div>
            </div>
        </main>
    );
}