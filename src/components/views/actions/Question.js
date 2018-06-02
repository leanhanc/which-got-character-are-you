import React, { Component } from 'react'

class Question extends Component {
  render () {
    switch (this.props.secuenceNum) {
      default:
        return (
          <div>
            <p className='has-text-centered q'> {this.props.preguntas.q1} </p>
          </div>
        )
      case 1:
        return (
          <div>
            <p className='has-text-centered q'> {this.props.preguntas.q2} </p>
          </div>
        )
      case 2:
        return (
          <div>
            <p className='has-text-centered q '> {this.props.preguntas.q3} </p>
          </div>
        )
      case 3:
        return (
          <div>
            <p className='has-text-centered q'> {this.props.preguntas.q4} </p>
          </div>
        )
    }
  }
}

export default Question
