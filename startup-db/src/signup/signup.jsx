import React from "react";
import './signup.css';
import { useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm";

export function Signup({ setIsAuthenticated }) {
    const navigate = useNavigate();
    const [error, setError] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    async function handleSignup(form) {
        setError('');
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/auth/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    userName: form.username,
                    email: form.email,
                    password: form.password,
                }),
            });

            if (!response.ok) {
                const body = await response.json().catch(() => ({}));
                throw new Error(body.msg || 'Account creation failed');
            }

            localStorage.setItem('userName', form.username);
            setIsAuthenticated(true);
            navigate('/home', { replace: true });
        } catch (registerError) {
            setError(registerError.message);
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
                <SignupForm onSignup={handleSignup} error={error} isSubmitting={isSubmitting} />
            </div>
        </div>
    );
}