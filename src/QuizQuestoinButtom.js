import React, { Component } from 'react'

export default class QuizQuestoinButtom extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <button> {this.props.button_text} </button>
        )
    }
}
