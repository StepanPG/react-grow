import React, { Component } from 'react';
import '../styles/User.css';

class User extends Component {
    render() {
        return (
            <div className="user">
                <div>
                    <div>Name: {this.props.user.name}</div>
                    <div>Age: {this.props.user.age}</div>
                    <div>
                        Location: {this.props.user.location.city},{' '}
                        {this.props.user.location.country}
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => this.props.handleUserDelete(this.props.user.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default User;
