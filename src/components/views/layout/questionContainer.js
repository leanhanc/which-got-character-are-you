import React, { Component } from 'react'
import Question from '../actions/Question'
import Answer from '../actions/Answer'
import OptionButton from '../ui-elements/optionButton'

class questionContainer extends Component {
  render () {
    return (
      <div className='container'>
        <Question
          secuenceNum={this.props.secuenceNum}
          preguntas={this.props.preguntas}
        />
        <Answer
          characterResponses={this.props.characterResponses}
          renderAnswer={this.props.renderAnswer}
        />
        <div className='container has-text-centered m-t-32'>
          <OptionButton>MUY EN DESACUERDO</OptionButton>
          <OptionButton>DESACUERDO</OptionButton>
          <OptionButton>DE ACUERDO</OptionButton>
          <OptionButton>MUY DE ACUERDO</OptionButton>
        </div>
      </div>
    )
  }
}

export default questionContainer
