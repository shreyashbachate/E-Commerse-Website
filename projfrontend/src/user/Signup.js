import React, { useState } from "react"
import Base from "../core/Base"
import { Link } from "react-router-dom"
import { signup } from "../auth/helper"

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const { name, email, password, error, success } = values;

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password })
            .then((data) => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    })
                }
            })
            .catch(console.log("Error in Sign up"))
    }

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light"> Name </label>
                            <input
                                className="form-control"
                                onChange={handleChange("name")}
                                type="text"
                                value={name}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label className="text-light"> Email </label>
                            <input
                                className="form-control"
                                onChange={handleChange("email")}
                                type="email"
                                value={email}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label className="text-light"> Password </label>
                            <input
                                className="form-control"
                                onChange={handleChange("password")}
                                type="password"
                                value={password}
                            ></input>
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

    const successMessage = () => {

        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success"
                        style={{ display: success ? "" : "None" }}
                    >
                        New Account was Created Successfully.
                        Please <Link to="/signin"> Login here</Link>
                    </div>
                </div>
            </div>
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

    return (
        <Base title="Sign Up Page" description="A page that helps to Sign Up">
            {successMessage()}
            {errorMessage()}

            {signUpForm()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>

        </Base>
    )
}

export default Signup;