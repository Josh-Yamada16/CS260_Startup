import React from "react";
import './signup.css';
import { Link, useNavigate } from "react-router-dom";

export function Signup({ setIsAuthenticated }) {
    const navigate = useNavigate();
    const [form, setForm] = React.useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));
    }

    async function handleRegister(e) {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

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
                            <input type="text" className="form-control username-input" id="exampleDropdownFormUsername" name="username" placeholder="username" value={form.username} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormEmail1" className="form-label email-label">Enter an Email Address:</label>
                            <input type="email" className="form-control email-input" id="exampleDropdownFormEmail1" name="email" placeholder="email@example.com" value={form.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormPassword1" className="form-label password-label">Enter a Password:</label>
                            <input type="password" className="form-control password-input" id="exampleDropdownFormPassword1" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormPassword2" className="form-label confirm-label">Confirm Password</label>
                            <input type="password" className="form-control confirm-input" id="exampleDropdownFormPassword2" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
                        </div>
                        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                        <button type="submit" className="btn btn-primary btn-lg signup-btn" style={{marginRight: '10px'}} disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Register'}</button>
                        <Link to="/authPage" className="login-link">Already have an account?</Link>
                    </form>
                </div>
            </div>
        </main>
    );
}