import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-component">
                <h2>This is Home page</h2>
                <h3>
                    Current amount of users are: {this.props.users.length || 0}
                </h3>
                <ul>
                    {this.props.users.map(user => {
                        return (
                            <li key={user.id}>
                                {user.name} from {user.location.city},{' '}
                                {user.location.country}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users,
});

export default connect(mapStateToProps)(Home);
