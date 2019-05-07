import React, { Component } from 'react'

class QuizEnd extends Component {
    constructor (props) {
        super(props);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    handleResetClick (e) {
        e.preventDefault();
        this.props.handleResetHandler();
    }

    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a href='' onClick={this.handleResetClick}>Reset Quiz</a>
        </div>
        )
    }
}


export default QuizEnd;
