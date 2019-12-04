import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink activeClassName="is-active" to="/" exact={true}>Contact form</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/blog">Blog</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/beer-app">Beer app</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/login">Login</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/todo">To-do list</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/todo2">To-do list 2</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;