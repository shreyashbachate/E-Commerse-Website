import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Link, Route } from "react-router-dom"
import Home from './core/Home'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" element={< Home />} />
            </Switch>
        </Router>
    )
}

// export default Routes1;
