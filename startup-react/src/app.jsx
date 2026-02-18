import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, useLocation } from "react-router-dom";
import './app.css';

import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { Index } from './index/index';
import { Home } from './home/home';
import { Build } from './build/build';
import { Other_Builds } from './other_builds/other_builds';
import { Signup } from './signup/signup';

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function usePageLocation() {
        const location = useLocation();
        return location.pathname;
    }

    function HeaderFooter(){
        return (
            <div className='body'>
                <header>
                    <h1>DnD Character Builder<sup></sup></h1>
    
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/build">Build</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/other_builds">Other Builds</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/index">Logout</NavLink>
                        </li>
                    </ul>
                    <hr />
                </header>
            </div>
        );
    }

    function AppContent() {
        const pathname = usePageLocation();
        const showHeader = ['/home', '/build', '/other_builds'].includes(pathname);
        return (
            <div>
                {showHeader && <HeaderFooter />}
                <Routes>
                    <Route path="/" element={<Navigate to="/index" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/build" element={<Build />} />
                    <Route path="/other_builds" element={<Other_Builds />} />
                    <Route path="/index" element={<Index setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer>
                    <div className="container-fluid">
                        <a href="https://github.com/josh-yamada" className="text-reset">GitHub Josh Yamada</a>
                    </div>
                </footer>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

function NotFound() {
    return (
        <main className='container-fluid bg-secondary text-center'>
            404: Return to sender. Address unknown.
        </main>
    );
}