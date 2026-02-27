import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import { BuildsGallery } from "../shared/buildsGallery.jsx";

export function Home() {
    return (
        <main>
            <label htmlFor="my-builds" style={{fontSize: 25}}>My Builds</label>
            <div className="gallery-container">
                <BuildsGallery />
            </div>
            <Link to="/build" className="btn btn-primary btn-lg" style={{backgroundColor: '#1e4d2b', width: '250px'}}>Create New Character</Link>
        </main>
    );
}