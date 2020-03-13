import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

export const NavBar = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    };

    return (
        <nav className="mb20">
            <div className="nav-wrapper px1 indigo darken-1">
                <a href="/" className="brand-logo">Shorten your link</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to='/create'>Create link</NavLink></li>
                    <li><NavLink to='/links'>Links list</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Logout</a></li>
                </ul>
            </div>
        </nav>
    )
};
