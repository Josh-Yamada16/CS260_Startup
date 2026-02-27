import React from "react";
import './other_builds.css';
import { BuildNotifications } from "./buildNotifications";

export function Other_Builds(props) {
    return (
        <main>
            <section className="notifications">
                <div className="notifications-header-box">
                    <h2>Live Notifications</h2>
                    <div className="notification-box" id="notificationBox">
                        <BuildNotifications userName={props.userName} />
                    </div>
                </div>
            </section>
            <br />

            <h2>Character Builds Gallery</h2>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4" style={{paddingBottom: 10}}>
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

            <div>
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link page-link-action" href="#">Previous</a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link page-link-action" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </main>
    );
}