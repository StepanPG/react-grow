import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import UserList from './UserList';
import UserForm from './UserForm';

export default function App() {
    return (
        <Router>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={UserList} />
            <Route exact path="/add" component={UserForm} />
        </Router>
    );
}
