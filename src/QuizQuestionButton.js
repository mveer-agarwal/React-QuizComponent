import React, { Component } from 'react'

export default class QuizQuestionButton extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <button> {this.props.button_text} </button>
        )
    }
}
