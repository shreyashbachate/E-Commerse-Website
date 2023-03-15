import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { updateCategory, getCategory } from './helper/adminapicall'


//TODO: Make a functionality such that after creation of product admin redirected to admin dashboard


export default function UpdateCategories() {

    const { categoryID } = useParams()

    const { user, token } = isAuthenticated()

    const [values, setValues] = useState({
        updatedCategory: "",
        error: "",
        success: false
    })

    const { updatedCategory, error, success } = values

    const preload = (categoryID) => {
        getCategory(categoryID).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({
                    ...values,
                    updatedCategory: data.name
                })
                console.log(data);
            }
        })
    }

    useEffect(() => {
        preload(categoryID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const onSubmit = (event) => {
        event.preventDefault()
        updateCategory(categoryID, user._id, token, { updatedCategory })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                }
                else {
                    setValues({ ...values, updatedCategory: data.name, success: true })
                }
            })

    }

    const handleChange = (event) => {
        setValues({
            ...values,
            error: "",
            updatedCategory: event.target.value
        })
    }

    const successMessage = () => (
        <div className="alert alert-success" style={{ display: success ? "" : "none" }}>
            {updatedCategory} updated successfully
        </div>
    )
    const errorMessage = () => (
        <div className="alert alert-warning" style={{ display: error ? "" : "none" }}>
            <h4 className="text-warning"> Error occured while updating Category </h4>
        </div>
    )


    const updateCategoryForm = () => (

        <form>
            <div className="form-group">
                <p className="lead"> Enter the category</p>
                <input
                    type="text"
                    className="form-control my-3"
                    onChange={handleChange}
                    value={updatedCategory}
                    autoFocus
                    required
                    placeholder='For ex. Summer'
                />
                <button onClick={onSubmit} className="btn btn-outline-success mb-4 mt-4">Update Category</button>
            </div>

        </form>
    )

    return (
        <Base
            title='Update a Category here'
            description='Welcome to category update section'
            className='container bg-info p-4'
        >
            <Link to="/admin/dashboard" className='btn btn-md btn-dark mb-3'> Admin Home</Link>
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {updateCategoryForm()}
                </div>
            </div>
        </Base>
    )
}
