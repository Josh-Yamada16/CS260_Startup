import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { Index } from './index/index';
import { Home } from './home/home';
import { Build } from './build/build';
import { Other_Builds } from './other_builds/other_builds';

export default function App() {
    return (
    <BrowserRouter>
        <div className='body bg-dark text-light'>
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

            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/build' element={<Build />} />
                <Route path='/other_builds' element={<Other_Builds />} />
                <Route path='/index' element={<Index />} />
            </Routes>

            <footer className="bg-dark text-white-50">
            <div className="container-fluid">
                <span className="text-reset">Josh Yamada</span>
                <a className="text-reset" href="https://github.com/webprogramming260/simon-css">Source</a>
            </div>
            </footer>
        </div>
    </BrowserRouter>
    );
}

function NotFound() {
    return ( <main className='container-fluid bg-secondary text-center'>
        404: Return to sender. Address unknown.
    </main> );
}