import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import InputForm from "./InputForm";

class App extends Component {
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
                        <Route path="/" exact component={Home} />
                        <Route
                            path="/add"
                            component={InputForm}
                            addUser={this.handleUserAdding}
                        />
                        <Route path="/users" component={Users} />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
