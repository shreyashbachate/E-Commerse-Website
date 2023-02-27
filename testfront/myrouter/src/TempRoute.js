import React from 'react'
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom"
import User from './User';
import Visit from './Visit';
import notfound from './notfound';
import App from './App';

export default function TempRoute() {
    return (
        <>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/user">User</Link></li>
                        <li><Link to="/visit">Visit</Link></li>
                    </ul>
                </div>
                <Routes>

                    <Route  path="/" element={<App />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/visit" element={<Visit />} />
                    <Route element={notfound} />
                </Routes>

            </Router>
        </>
    )
}
