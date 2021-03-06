import React, { Component } from "react";

import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      incorrectAnswer: false
    };
  }

  handleClick(buttonText) {
    if (this.props.quiz_question.answer === buttonText) {
      this.props.showNextQuestionHandler(buttonText);
      this.setState({
        incorrectAnswer: false
      });
    } else {
      this.setState({
        incorrectAnswer: true
      });
    }
  }

  render() {
    return (
      <main>
        <section>
          <p className="QuizQuestion">
            {this.props.quiz_question.instruction_text}
          </p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => (
                <QuizQuestionButton
                  clickHandler={this.handleClick}
                  key={index}
                  button_text={answer_option}
                />
              )
            )}
          </ul>
        </section>
        {this.state.incorrectAnswer ? (
          <div className="error"> Sorry, That is not the right answer </div>
        ) : null}
      </main>
    );
  }
}

export default QuizQuestion;
