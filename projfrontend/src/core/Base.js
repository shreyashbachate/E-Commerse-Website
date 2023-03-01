import React from 'react'
import Menu from './Menu'

export default function Base({
    title = "MY Title",
    description = "My description",
    className = "bg-dark text-white p-4",
    children
}) {
    return (
        <div>
            <Menu />
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4"> {title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-success text-white text-center p-3">
                    <h4>If you got any questions , Feel free to reach out </h4>
                    <button className="btn btn-warning btn-lg"> Contact US</button>
                </div>
                <div className="container">
                    <span className="text-white">
                        An Amazing T-Shirt Site
                    </span>
                </div>
            </footer>
        </div>
    )
}
