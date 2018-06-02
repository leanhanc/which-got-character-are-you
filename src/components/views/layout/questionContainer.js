import React, { Component } from 'react'
import Question from '../actions/Question'
import Answer from '../actions/Answer'
import OptionButton from '../ui-elements/optionButton'

class questionContainer extends Component {
  userAnswerHandler = e => {
    let valueToCompute = e.target.name
    this.props.computeAnswer(valueToCompute)
  }

  render () {
    return (
      <div className='container'>
        <Question
          secuenceNum={this.props.secuenceNum}
          preguntas={this.props.preguntas}
          finalPositions={this.props.finalPositions}
        />
        <Answer
          characterResponses={this.props.characterResponses}
          answerNumRender={this.props.secuenceNum}
        />
        <div className='container has-text-centered m-t-32'>
          <OptionButton name='-3' onClick={this.userAnswerHandler}>
            MUY EN DESACUERDO
          </OptionButton>
          <OptionButton name='-1' onClick={this.userAnswerHandler}>
            DESACUERDO
          </OptionButton>
          <OptionButton name='1' onClick={this.userAnswerHandler}>
            DE ACUERDO
          </OptionButton>
          <OptionButton name='3' onClick={this.userAnswerHandler}>
            MUY DE ACUERDO
          </OptionButton>
        </div>
      </div>
    )
  }
}

export default questionContainer
