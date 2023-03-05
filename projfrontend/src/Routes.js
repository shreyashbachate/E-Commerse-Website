import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Link, Route } from "react-router-dom"
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import ManageCategory from './admin/ManageCategory'
import AdminRoutes from './auth/helper/AdminRoutes'
import PrivateRoutes from './auth/helper/PrivateRoutes'
import Home from './core/Home'
import AdminDashBoard from './user/AdminDashBoard'
import Signin from './user/Signin'
import Signup from './user/Signup'
import UserDashBoard from './user/UserDashBoard'


export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" element={< Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />

                    <Route path="/user/dashboard" element={
                        <PrivateRoutes>
                            <UserDashBoard />
                        </PrivateRoutes>
                    }
                    />
                    
                    <Route path="/admin/dashboard" element={
                        <AdminRoutes>
                            <AdminDashBoard />
                        </AdminRoutes>
                    }
                    />
                    <Route path="/admin/create/category" element={
                        <AdminRoutes>
                            <AddCategory />
                        </AdminRoutes>
                    }
                    />
                    <Route path="/admin/categories" element={
                        <AdminRoutes>
                            <ManageCategory />
                        </AdminRoutes>
                    }
                    />
                    <Route path="/admin/create/product" element={
                        <AdminRoutes>
                            <AddProduct />
                        </AdminRoutes>
                    }
                    />
                </Switch>
            </Router>
        </div>
    )
}

// export default Routes1;
