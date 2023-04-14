import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Order from "./Pages/Order"

function myRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/order" Component={Order} />
            </Routes>
        </Router>


    )
}

export default myRoutes