import React from "react";

const Navbar = (props) => (
    <nav className="navbar">
            <span className="brand"><a href="/"><img alt="epl" src="../assets/images/logo.png"/></a></span>
            <span className="">{props.message}</span>
            <span>Score: {props.correct} | Top Score: {props.topscore}</span>
    </nav>
)
export default Navbar;