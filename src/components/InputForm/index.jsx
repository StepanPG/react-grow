import React, { Component } from 'react';
import './InputForm.css';

class InputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastUserId: this.props.lastUserId,
            userName: '',
            userAge: '',
            userCountry: '',
            userCity: '',
        };
    }

    componentWillUnmount() {
        this.props.updateLastUserId(this.state.lastUserId);
    }

    handleSubmit = event => {
        event.preventDefault();
        const nextUserId = this.state.lastUserId + 1;

        this.props.addUser({
            id: nextUserId,
            name: this.state.userName,
            age: parseInt(this.state.userAge, 10) || 0,
            location: {
                country: this.state.userCountry,
                city: this.state.userCity,
            },
        });

        this.setState({
            lastUserId: nextUserId,
            userName: '',
            userAge: '',
            userCountry: '',
            userCity: '',
        });
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <div className="inputForm-component">
                <h2>Here you can create new user:</h2>
                <form
                    action=""
                    className="inputForm__form"
                    onSubmit={this.handleSubmit}>
                    <div className="form-inputs">
                        <div className="form-inputs__labels">
                            <label htmlFor="userName">Name:</label>
                            <label htmlFor="userAge">Age:</label>
                            <label htmlFor="userCountry">Country:</label>
                            <label htmlFor="userCity">City:</label>
                        </div>

                        <div className="form-inputs__inputs">
                            <input
                                type="text"
                                name="userName"
                                id="userName"
                                placeholder="Stepan"
                                value={this.state.userName}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="number"
                                min="1"
                                max="150"
                                name="userAge"
                                id="userAge"
                                placeholder="21"
                                value={this.state.userAge}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="text"
                                name="userCountry"
                                id="userCountry"
                                placeholder="Belarus"
                                value={this.state.userCountry}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="text"
                                name="userCity"
                                id="userCity"
                                placeholder="Minsk"
                                value={this.state.userCity}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <button type="submit">Add new user</button>
                </form>
            </div>
        );
    }
}

export default InputForm;
