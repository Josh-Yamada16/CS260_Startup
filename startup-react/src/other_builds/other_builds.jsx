import React from "react";
import './other_builds.css';
import { BuildNotifications } from "./buildNotifications";
import { BuildsGallery } from "./buildsGallery.jsx";

export function Other_Builds(props) {
    return (
        <main>
            <section className="notifications">
                <div className="notification-container">
                    <h2>Live Notifications</h2>
                    <div className="notification-box" id="notificationBox">
                        <BuildNotifications userName={props.userName} />
                    </div>
                </div>
            </section>
            <br />

            <h2>Character Builds Gallery</h2>
            <div className="gallery-container">
                <BuildsGallery />
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