import React, { Component } from 'react'
import Question from '../actions/Question'
import Answer from '../actions/Answer'
import OptionButton from '../ui-elements/optionButton'

class questionContainer extends Component {
  userAnswerHandler = e => {
    let valueToCompute = e.target.name
    this.props.computeAnswer(valueToCompute)

    // Agregar clase de fadeIn en la respuesta y removerla
    if (this.props.secuenceNum < 25) {
      document.querySelector('.respuesta').classList.add('fadeInUp')
      if (this.props.secuenceNum < 25) {
        window.setTimeout(() => {
          if (document.querySelector('.respuesta') !== null) {
            document.querySelector('.respuesta').classList.remove('fadeInUp')
          }
        }, 800)
      }
    }
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
          startAnswerAnimation={this.props.startAnswerAnimation}
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
