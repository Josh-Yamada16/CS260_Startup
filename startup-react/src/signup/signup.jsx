import React from "react";
import './signup.css';

export function Signup() {
    return (
        <main>
            <div className="row">
                <div className="col-6 left">
                    <h1>Start Your Adventure Here</h1>
                    <p>Create and design your own D&D character or explore and be inspired by other awesome creations.</p>
                </div>
                <div className="col-6 right">
                    <h1 style={{margin: 0}}>Welcome to DnD Character Builder</h1>
                    <form method="get" action="home.html">
                        <h5 style={{fontSize: 15}}>Create your account.</h5>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormUsername" className="form-label" style={{fontSize: 20, margin: 0}}>Enter a Username:</label>
                            <input type="text" className="form-control" id="exampleDropdownFormUsername" placeholder="username" style={{width: '40%'}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormEmail1" className="form-label" style={{fontSize: 20, margin: 0}}>Enter an Email Address:</label>
                            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" style={{width: '40%'}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormPassword1" className="form-label" style={{fontSize: 20, margin: 0}}>Enter a Password:</label>
                            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" style={{width: '40%'}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleDropdownFormPassword2" className="form-label" style={{fontSize: 20, margin: 0}}>Confirm Password</label>
                            <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Confirm Password" style={{width: '40%'}} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" style={{backgroundColor: '#1e4d2b'}}>Register</button>
                        <a href="index.html" style={{color: '#d4af37'}}>Already have an account?</a>
                    </form>
                </div>
            </div>
        </main>
    );
}