import React, { Component } from 'react';
import './User.css';

class User extends Component {
    handleDeleteButton = () => {
        this.props.handleUserDeleting(this.props.user.id);
    };

    render() {
        return (
            <div className="user">
                <div>
                    <div>Name: {this.props.user.name}</div>
                    <div>Age: {this.props.user.age}</div>
                    <div>Location: {this.props.user.location.city}, {this.props.user.location.country}</div>
                </div>
                <div>
                    <button onClick={this.handleDeleteButton}>Delete</button>
                </div>
            </div>
        );
    }
}

export default User;
