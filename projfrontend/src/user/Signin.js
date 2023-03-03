import React, { useState } from "react"
import Base from "../core/Base"
import { Link, Navigate } from "react-router-dom"
import { signin, authenticate, isAuthenticated } from "../auth/helper"

const Signin = () => {

    const [values, setValues] = useState({
        email: "abcd@abcd.com",
        password: "123456789",
        error: "",
        loading: false,
        didRedirect: false
    })

    const { email, password, error, loading, didRedirect } = values
    const { user } = isAuthenticated()

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, error: false, loading: true })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: true })
                }
                else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            didRedirect: true
                        })
                    })
                }
            })
            .catch(console.log("Sign In Failed"))
    }


    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2> Loading....</h2>
                </div>
            )
        )
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger"
                        style={{ display: error ? "" : "None" }}
                    >
                        {error}
                    </div>
                </div>
            </div>
        )
    }

    const performRedirect = () => {
        if (didRedirect) {
            if (user && user.role === 1) {
                return <p>redirect to admin</p>
            }
            else {
                return <p>redirect to user dashboard</p>
            }
        }
        if (isAuthenticated()) {
            return <Navigate to="/" />
        }
    }


    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light"> Email </label>
                            <input onChange={handleChange("email")} value={email} className="form-control" type="email"></input>
                        </div>
                        <div className="form-group">
                            <label className="text-light"> Password </label>
                            <input onChange={handleChange("password")} value={password} className="form-control" type="password"></input>
                        </div>
                        <div className="form-group d-grid mt-2">
                            <button onClick={onSubmit} className="btn btn-block btn-success ">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <Base title="Sign In Page" description="A page that helps to Sign In">
            {loadingMessage}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    )
}

export default Signin;