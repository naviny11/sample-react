import React from 'react';
import {NavLink} from 'react-router-dom';
import "./router.css";

const Menu = () => {
    return (
        <>
            <div className="menu_style">
                <NavLink exact to="/" activeClassName="active_class">About</NavLink>
                <NavLink to="/service" activeClassName="active_class">Service</NavLink>
                <NavLink to="/user/navin/yadav" activeClassName="active_class">User</NavLink>
                <NavLink to="/search" activeClassName="active_class">Search</NavLink>
                <NavLink to="/contact" activeClassName="active_class">Contact</NavLink>
            </div>
        </>
    );
}

export default Menu;