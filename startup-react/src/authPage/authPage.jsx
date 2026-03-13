import React from "react";
import './authPage.css';
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

export function AuthPage({ setIsAuthenticated }) {
    const navigate = useNavigate();
    const [error, setError] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    async function handleAuth({ credential, password }) {
        setError('');
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({ credential, password }),
            });

            if (!response.ok) {
                const body = await response.json().catch(() => ({}));
                throw new Error(body.msg || 'Authentication failed');
            }

            const body = await response.json().catch(() => ({}));
            const userName = body.userName || credential;

            localStorage.setItem('userName', userName);
            setIsAuthenticated(true);
            navigate('/home', { replace: true });
        } catch (authError) {
            setError(authError.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="auth-main">
            <div className="left">
                <h1>Start Your Adventure Here</h1>
                <p>Create and design your own D&D character or explore and be inspired by other awesome creations.</p>
            </div>
            <div className="right">
                <h1 className="welcome-title">Welcome to DnD Character Builder</h1>
                <AuthForm onAuth={handleAuth} error={error} isSubmitting={isSubmitting} />
            </div>
        </div>
    );
}