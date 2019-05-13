import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="navigation">
                <ul className="navigation-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add User</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
