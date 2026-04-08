import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import './app.css';
import { BuildDetails } from './build/buildDetails';

import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { AuthPage } from './authPage/authPage';
import { Home } from './home/home';
import { Build } from './build/build';
import { Other_Builds } from './other_builds/other_builds';
import { Signup } from './signup/signup';

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(Boolean(localStorage.getItem('userName')));

    function usePageLocation() {
        const location = useLocation();
        return location.pathname;
    }

    function HeaderFooter(){
        const navigate = useNavigate();
        const location = useLocation();
        const userName = localStorage.getItem('userName') || 'Adventurer';
        const isBuildDetailPage = location.pathname.startsWith('/build/');

        function handleLogout() {
            fetch('/api/auth/logout', {
            method: 'DELETE',
            })
            .catch(() => {
                // Logout failed. Assuming offline
            })
            .finally(() => {
                localStorage.removeItem('userName');
                setIsAuthenticated(false);
                navigate('/authPage');
            });
        }

        return (
            <div className='body'>
                <header>
                    <h1>DnD Character Builder<sup></sup></h1>
                    <h3>Welcome, {userName}!</h3>
    
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${(isActive || isBuildDetailPage) ? 'active' : ''}`} to="/build">Build</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/other_builds">Other Builds</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={handleLogout}>Logout</a>
                        </li>
                    </ul>
                    <hr />
                </header>
            </div>
        );
    }

    function AppContent() {
        const pathname = usePageLocation();
        const showHeader = isAuthenticated && (
            ['/home', '/build', '/other_builds'].includes(pathname) || pathname.startsWith('/build/')
        );
        return (
            <div>
                {showHeader && <HeaderFooter />}
                <Routes>
                    <Route path="/" element={<Navigate to={isAuthenticated ? '/home' : '/authPage'} replace />} />
                    <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Home /></ProtectedRoute>} />
                    <Route path="/build" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Build /></ProtectedRoute>} />
                    <Route path="/other_builds" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Other_Builds username={localStorage.getItem('userName')} /></ProtectedRoute>} />
                    <Route path="/build/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><BuildDetails /></ProtectedRoute>} />
                    <Route path="/authPage" element={isAuthenticated ? <Navigate to="/home" replace /> : <AuthPage setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="/signup" element={isAuthenticated ? <Navigate to="/home" replace /> : <Signup setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer>
                    <div className="container-fluid">
                        <a href="https://github.com/josh-yamada16" className="text-reset">GitHub Josh Yamada</a>
                    </div>
                </footer>
            </div>
        );
    }

    return (
        <div className='app-container'>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </div>
    );
}

function ProtectedRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/authPage" replace />;
    }

    return children;
}

function NotFound() {
    return (
        <main className='container-fluid bg-secondary text-center'>
            404: Return to sender. Address unknown.
        </main>
    );
}