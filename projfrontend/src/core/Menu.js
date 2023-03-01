import React from 'react'
import { createBrowserRouter, Link, useNavigate } from 'react-router-dom'
import { createBrowserHistory } from "history"

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#00cc99" }
    }
    else {
        return { color: "#FFFFFF" }
    }
}



export default function Menu() {
    const history = createBrowserHistory();
    const navigate = useNavigate();
    return (
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link style={currentTab(history, "/")} className="nav-link" to='/'>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/cart")} className="nav-link" to='/cart'>
                        Cart
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/user/dashboard")} className="nav-link" to='/user/dashboard'>
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/admin/dashboard")} className="nav-link" to='/admin/dashboard'>
                        A. Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/signup")} className="nav-link" to='/signup'>
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/signin")} className="nav-link" to='/signin'>
                        Sign In
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/signout")} className="nav-link" to='/signout'>
                        Sign Out
                    </Link>
                </li>
            </ul>
        </div >
    )
}

