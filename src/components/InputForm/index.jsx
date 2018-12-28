import React, { Component } from "react";
import "./InputForm.css";

class InputForm extends Component {
    render() {
        return (
            <div className="inputForm-component">
                <span>Input form here:</span>
                <form action="" className="inputForm__form" /* onSubmit={alert('form was submitted')} */>
                    <div className="form-inputs">

                        <div className="form-inputs__labels">
                            <label htmlFor="user-name">Name:</label>
                            <label htmlFor="user-age">Age:</label>
                            <label htmlFor="user-country">Country:</label>
                            <label htmlFor="user-city">City:</label>
                        </div>

                        <div className="form-inputs__inputs">
                            <input type="text" name="name" id="user-name" placeholder="Mike" />
                            <input type="number" min="1" max="150" name="age" id="user-age" placeholder="99"/>
                            <input type="text" name="country" id="user-country" placeholder="USA"/>
                            <input type="text" name="city" id="user-city" placeholder="New York"/>
                        </div>

                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default InputForm;
