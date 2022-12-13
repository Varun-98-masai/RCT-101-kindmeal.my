import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login"
import Signup from "./Signup";

function AllRoutes(){

    return(
        <Routes >
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/Signup" element={<Signup/>} />
        </Routes>
    )
}
export default AllRoutes;