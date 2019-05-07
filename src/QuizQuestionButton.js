import React, { Component } from 'react'

class QuizQuestionButton extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <button> {this.props.button_text} </button>
        )
    }
}

export default QuizQuestionButton;
