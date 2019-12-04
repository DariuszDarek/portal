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
            </ul>
        </nav>
    );
}

export default Navbar;