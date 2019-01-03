import React, { Component } from 'react';
import User from '../User';

class Users extends Component {
    render() {
        return (
            <div>
                {this.props.users.map(user => (
                    <User
                        key={user.id}
                        user={user}
                        handleUserDeleting={this.props.handleUserDeleting}
                    />
                ))}
            </div>
        );
    }
}

export default Users;
