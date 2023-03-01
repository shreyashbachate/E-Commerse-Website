import React, { useState } from "react"
import Base from "../core/Base"
import { Form, Link } from "react-router-dom"

const Signup = () => {

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light"> Name </label>
                            <input className="form-control" type="text"></input>
                        </div>
                        <div className="form-group">
                            <label className="text-light"> Email </label>
                            <input className="form-control" type="email"></input>
                        </div>
                        <div className="form-group">
                            <label className="text-light"> Password </label>
                            <input className="form-control" type="password"></input>
                        </div>
                        <button className="btn btn-success btn-block mt-2 form-control"> Submit </button>
                        
                    </form>
                </div>
            </div>
        )
    }


    return (
        <Base title="Sign Up Page" description="A page that helps to Sign Up">

            {signUpForm()}
        </Base>
    )
}

export default Signup;