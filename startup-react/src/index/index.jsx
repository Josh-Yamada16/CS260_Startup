import React from "react";
import './index.css';

export function Index() {
    return (
        <main className="bg-secondary">
            <h1 className="text-center">Welcome to the Simon Game</h1>
            <p className="text-center">Click the button below to start playing!</p>
            <div className="text-center">
                <button className="btn btn-primary">Start Game</button>
            </div>
        </main>
    );
}