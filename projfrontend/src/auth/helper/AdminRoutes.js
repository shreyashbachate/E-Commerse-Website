import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { isAuthenticated } from './index'


const AdminRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>

                isAuthenticated() && isAuthenticated().user.role === 1 ? (
                    <Component {...props} />
                )
                    : (
                        <Navigate
                            to={{
                                pathname: "/signin",
                                state: { from:props.location }
                            }}
                        />
                    )
            }
        />
    )
}

export default AdminRoutes;
