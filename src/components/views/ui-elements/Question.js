import React, { Component } from 'react'
import Answer from './Answer'

class Question extends Component {
  render () {
    switch (this.props.secuenceNum) {
      case 0:
        return (
          <div>
            <p className='has-text-centered'> {this.props.preguntas.q1} </p>
            <Answer
              renderAnswer={this.props.renderAnswer}
              characterResponses={this.props.characterResponses}
            />
          </div>
        )
      case 1:
        return <div> {this.props.preguntas.q2} </div>
      case 2:
        return <div> {this.props.preguntas.q3} </div>
      case 3:
        return <div>{this.props.preguntas.q4} </div>
    }
  }
}

export default Question
