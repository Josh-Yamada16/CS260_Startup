import React from "react";
import './build.css';
import { Link } from "react-router-dom";

export function Build() {
    return (
        <main>
            <div className="build-layout">
            {/* progress bar to see which section you are on */}
            <div className="list-group build-sidebar">
                <a href="#class-section" className="list-group-item list-group-item-action active" aria-current="true">
                Class
                </a>
                <a href="#race-section" className="list-group-item list-group-item-action">Race</a>
                <a href="#background-section" className="list-group-item list-group-item-action">Background</a>
                <a href="#feats-section" className="list-group-item list-group-item-action">Feats</a>
                <a href="#actions-section" className="list-group-item list-group-item-action">Actions</a>
            </div>
            <div className="build-content">
                {/* card to see options and details for character creation */}
                <label id="class-section" htmlFor="class-select" style={{fontSize: 25}}>Class:</label>

                <div className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-4">
                    <div className="col">
                        <div className="card">
                            <svg className="card-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#1e4d2b"></rect>
                            </svg>

                            <div className="card-body">
                            <h5 className="card-title">Selection 1</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Learn more</a>
                            </div>
                            <div className="card-overlay">
                                <p>Click to select this option</p>
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
                            <h5 className="card-title">Selection 3</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Learn more</a>
                            </div>
                            <div className="card-overlay">
                                <p>Click to select this option</p>
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
                            <h5 className="card-title">Selection 3</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Learn more</a>
                            </div>
                            <div className="card-overlay">
                                <p>Click to select this option</p>
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

                <br />

                {/* card to see options and details for character creation */}
                <label id="race-section" htmlFor="race-select" style={{fontSize: 25}}>Race:</label>
                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
                    <div className="col">
                        <div className="card">
                            <svg className="card-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#1e4d2b"></rect>
                            </svg>

                            <div className="card-body">
                            <h5 className="card-title">Selection 1</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Learn more</a>
                            </div>
                            <div className="card-overlay">
                                <p>Click to select this option</p>
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
                            <h5 className="card-title">Selection 2</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Learn more</a>
                            </div>
                            <div className="card-overlay">
                                <p>Click to select this option</p>
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
                            <h5 className="card-title">Selection 3</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Learn more</a>
                            </div>
                            <div className="card-overlay">
                                <p>Click to select this option</p>
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
                            <a href="#" tabindex="-1" className="btn btn-primary disabled placeholder col-6" style={{backgroundColor: '#1e4d2b'}}></a>
                            </div>
                        </div>
                    </div>
                </div>

                <br />

                <label id="background-section" htmlFor="race-select" style={{fontSize: 25}}>Background:</label>
                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
                    <div className="col">
                        <div className="card">
                            <svg className="card-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#1e4d2b"></rect>
                            </svg>

                            <div className="card-body">
                            <h5 className="card-title">Selection 1</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Learn more</a>
                            </div>
                            <div className="card-overlay">
                                <p>Click to select this option</p>
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
                            <h5 className="card-title">Selection 2</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Learn more</a>
                            </div>
                            <div className="card-overlay">
                                <p>Click to select this option</p>
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
                            <h5 className="card-title">Selection 3</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Learn more</a>
                            </div>
                            <div className="card-overlay">
                                <p>Click to select this option</p>
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
                            <a href="#" tabindex="-1" className="btn btn-primary disabled placeholder col-6" style={{backgroundColor: '#1e4d2b'}}></a>
                            </div>
                        </div>
                    </div>
                </div>

                <br />

                <label id="feats-section" htmlFor="race-select" style={{fontSize: 25}}>Feats:</label>
                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
                    <div className="col">
                        <div className="card">
                            <svg className="card-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#1e4d2b"></rect>
                            </svg>

                            <div className="card-body">
                            <h5 className="card-title">Selection 1</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Learn more</a>
                            </div>
                            <div className="card-overlay">
                                <p>Click to select this option</p>
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
                            <h5 className="card-title">Selection 2</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Learn more</a>
                            </div>
                            <div className="card-overlay">
                                <p>Click to select this option</p>
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
                            <h5 className="card-title">Selection 3</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#1e4d2b'}}>Learn more</a>
                            </div>
                            <div className="card-overlay">
                                <p>Click to select this option</p>
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
                            <a href="#" tabindex="-1" className="btn btn-primary disabled placeholder col-6" style={{backgroundColor: '#1e4d2b'}}></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="actions-section">
                    <Link to="/home" className="btn btn-primary btn-lg" style={{backgroundColor: '#1e4d2b', width: '190px', marginRight: '10px'}}>Create Character</Link>
                    <Link to="/build" className="btn btn-outline-danger" >Clear</Link>
                </div>
            </div>
            </div>
        </main>
    );
}