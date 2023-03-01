import React, { useState } from "react"
import Base from "../core/Base"
import { Link } from "react-router-dom"

const Signin = () => {
    
    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light"> Email </label>
                            <input className="form-control" type="email"></input>
                        </div>
                        <div className="form-group">
                            <label className="text-light"> Password </label>
                            <input className="form-control" type="password"></input>
                        </div>
                        <button className="btn btn-success btn-block mt-2 form-control"> Log In </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <Base title="Sign In Page" description="A page that helps to Sign In">
            {signInForm()}
        </Base>
    )
}

export default Signin;