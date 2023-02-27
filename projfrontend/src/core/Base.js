import React from 'react'

export default function Base({
    title = "MY Title",
    description = "My description",
    className = "bg-dark text-white p-4",
    children
}) {
    return (
        <div>
            <div class="container-fluid">
                <div class="jumbotron bg-dark text-white text-center">
                    <h2 class="display-4"> {title}</h2>
                    <p class="lead">{description}</p>
                </div>
                <div class="className">{children}</div>
            </div>
            <footer class="footer bg-dark mt-auto py-3">
                <div class="container-fluid bg-success text-white text-center p-3">
                    <h4>If you got any questions , Feel free to reach out </h4>
                    <button class="btn btn-warning btn-lg"> Contact US</button>
                </div>
                <div class="container">
                    <span class="text-white">
                        An Amazing T-Shirt Site
                    </span>
                </div>
            </footer>
        </div>
    )
}
