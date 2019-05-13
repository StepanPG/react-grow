import React, { Component } from 'react';
import User from './User';
import { connect } from 'react-redux';

class UserList extends Component {
    render() {
        return (
            <div>
                {this.props.users.map(user => (
                    <User
                        key={user.id}
                        user={user}
                        handleUserDelete={this.props.handleUserDelete}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
    };
};

const mapDispatchToProps = dispatch => ({
    handleUserDelete: id => {
        dispatch({
            type: 'DELETE_USER',
            id,
        });
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);
