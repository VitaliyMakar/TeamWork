import React from "react"
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (

        <nav>
            <NavLink to="/">ToDo</NavLink>
            <NavLink to="/Posts">Posts</NavLink>
            <NavLink to="/Albums">Albums</NavLink>
        </nav>

    )
}

export default Navigation;