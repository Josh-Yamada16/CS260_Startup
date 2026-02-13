import React from "react";
import './index.css';

export function Index() {
    return (
        <main>
            <div className="row">
                <div className="col-6 left">
                    <h1>Start Your Adventure Here</h1>
                    <p>Create and design your own D&D character or explore and be inspired by other awesome creations.</p>
                </div>
                <div className="col-6 right">
                    <h1 style={{margin: 0}}>Welcome to DnD Character Builder</h1>
                    <form method="get" action="home.html" style={{lineHeight: 20}}>
                        <p>Don't have an account? <a href="signup.html" style={{color: '#d4af37'}}>Register</a></p>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormUsername" className="form-label" style={{fontSize: 20, margin: 0}}>Enter a Username:</label>
                            <input type="text" className="form-control" id="exampleDropdownFormUsername" placeholder="username" style={{width: '50%'}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormPassword1" className="form-label" style={{fontSize: 20, margin: 0}}>Enter a Password:</label>
                            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" style={{width: '50%'}} />
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" htmlFor="dropdownCheck">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" style={{backgroundColor: '#1e4d2b'}}>Login</button>
                    </form>
                </div>
            </div>
        </main>
    );
}