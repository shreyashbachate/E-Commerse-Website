import React, { Fragment } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { isAuthenticated } from './index'


const PrivateRoutes = ({ children, ...rest }) => {
    return (
        <div>
            {isAuthenticated() ? (
                children
            )
                : (
                    <Navigate to="/signin" />
                )
            }
        </div>
    )
}

export default PrivateRoutes;
