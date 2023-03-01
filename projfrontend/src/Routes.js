import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Link, Route } from "react-router-dom"
import Home from './core/Home'
import Signin from './user/Signin'
import Signup from './user/Signup'


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" element={< Home />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/signin" element={<Signin/>} />

            </Switch>
        </Router>
    )
}

// export default Routes1;
