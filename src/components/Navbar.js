import React from "react";

const Navbar = (props) => (
    <nav className="navbar">
            <span className="brand">
                {/* image in App.css */}
            </span>

            <span className="">
                {props.message}
            </span>

            <span>
                Score: {props.correct} | Top Score: {props.topscore}
            </span>
    </nav>
)
export default Navbar;