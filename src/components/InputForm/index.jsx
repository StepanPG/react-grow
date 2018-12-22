import React, { Component } from "react";

class InputForm extends Component {
    render() {
        return (
            <div>
                <span>Input form here:</span>
				<form action="" /* onSubmit={alert('form was submitted')} */>
					<input type="text" name="" id=""/>
					<button type="submit">Submit</button>
				</form>
            </div>
        );
    }
}

export default InputForm;
