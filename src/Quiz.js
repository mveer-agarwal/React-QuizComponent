import React, {Component} from 'react';

import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor (props) {
        super(props);
        this.state = {'quiz_position': 1};
        this.showNextQuestion = this.showNextQuestion.bind(this);
        this.resetQuiz =  this.resetQuiz.bind(this);
    }

    showNextQuestion (buttonText) {
        this.setState({'quiz_position': this.state.quiz_position + 1});
    }

    resetQuiz () {
        this.setState({'quiz_position': 1})
    }

    render () {
        const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length;

        return <div>
            { isQuizEnd ? <QuizEnd handleResetHandler = {this.resetQuiz} /> : <QuizQuestion showNextQuestionHandler = {this.showNextQuestion} quiz_question = {quizData.quiz_questions[this.state.quiz_position -1] }/> }
        </div>
    };
}

export default Quiz;