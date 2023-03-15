import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'


export default function AdminDashBoard() {

    const { user: { name, email } } = isAuthenticated()

    const adminLeftSide = () => {
        return (
            <div className="card" >
                <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className='nav-link text-success'
                            to="/admin/create/category"
                        >
                            Create Categories
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className='nav-link text-success'
                            to="/admin/categories"
                        >
                            Manage Categories
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className='nav-link text-success'
                            to="/admin/create/product"
                        >
                            Create Product
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className='nav-link text-success'
                            to="/admin/products"
                        >
                            Manage Products 
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className='nav-link text-success'
                            to="/admin/orders"
                        >
                            Manage Orders
                        </Link>
                    </li>
                </ul>
            </div >
        )
    }
    const adminRightSide = () => {
        return (
            <div className="card mb-4">
                <h4 className="card-header">Admin Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge bg-success">Name: </span> {name}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge bg-success">Email: </span> {email}
                    </li>
                    <li className="list-group-item">
                        <span class="badge badge bg-danger">Admin Area</span>
                    </li>
                </ul>
            </div>
        )
    }
    return (
        <Base title='Welcome To Admin Area'
            description='You can manage all products here'
            className='container bg-success p-4'
        >
            <div class="row">
                <div class="col-3"> {adminLeftSide()} </div>
                <div class="col-9"> {adminRightSide()} </div>
            </div>

        </Base>
    )
}
