import React from "react";
import './home.css';
import { Link } from "react-router-dom";

export function Home() {
    return (
        <main>
            <label htmlFor="my-builds" style={{fontSize: 25}}>My Builds</label>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
                <div className="col">
                    <div className="card">
                        <svg className="card-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#1e4d2b"></rect>
                        </svg>

                        <div className="card-body">
                        <h5 className="card-title">Build 1</h5>
                        <p className="card-text">Some quick example text.</p>
                        <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <svg className="card-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#1e4d2b"></rect>
                        </svg>

                        <div className="card-body">
                        <h5 className="card-title">Build 3</h5>
                        <p className="card-text">Some quick example text.</p>
                        <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <svg className="card-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#1e4d2b"></rect>
                        </svg>

                        <div className="card-body">
                        <h5 className="card-title">Build 5</h5>
                        <p className="card-text">Some quick example text.</p>
                        <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" aria-hidden="true">
                        <svg className="card-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#1e4d2b"></rect>
                        </svg>

                        <div className="card-body">
                        <div className="h5 card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </div>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                        </p>
                        <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6" style={{backgroundColor: '#1e4d2b'}}></a>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/build" className="btn btn-primary btn-lg" style={{backgroundColor: '#1e4d2b', width: '250px'}}>Create New Character</Link>
        </main>
    );
}