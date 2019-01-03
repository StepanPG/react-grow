import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import InputForm from './InputForm';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Stepan',
                    age: 21,
                    location: { country: 'Belarus', city: 'Minsk' },
                },
            ],
            lastUserId: 1,
        };
    }

    updateLastUserId = lastUserId => {
        this.setState({ lastUserId });
    };

    handleUserAdding = newUser => {
        this.setState(state => {
            return state.users.push(newUser);
        });
    };

    handleUserDeleting = userId => {
        let oldState = {
            users: this.state.users,
        };

        this.state.users.forEach((user, index) => {
            if (user.id === userId) {
                oldState.users.splice(index, 1);
            }
        });

        this.setState(state => {
            return oldState;
        });
    };

    render() {
        return (
            <Router>
                <div>
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

                    <main>
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <Home {...props} users={this.state.users} />
                            )}
                        />
                        <Route
                            path="/add"
                            render={props => (
                                <InputForm
                                    {...props}
                                    addUser={this.handleUserAdding}
                                    lastUserId={this.state.lastUserId}
                                    updateLastUserId={this.updateLastUserId}
                                />
                            )}
                        />
                        <Route
                            path="/users"
                            render={props => (
                                <Users
                                    {...props}
                                    users={this.state.users}
                                    handleUserDeleting={this.handleUserDeleting}
                                />
                            )}
                        />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
