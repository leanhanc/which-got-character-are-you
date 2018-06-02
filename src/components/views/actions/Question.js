import React, { Component } from 'react'

class Question extends Component {
  render () {
    let count = this.props.secuenceNum
    if (count >= 0 && count < 6) {
      return (
        <div>
          <p className='has-text-centered q'> {this.props.preguntas.q1} </p>
        </div>
      )
    }
    if (count >= 6 && count < 12) {
      return (
        <div>
          <p className='has-text-centered q'> {this.props.preguntas.q2} </p>
        </div>
      )
    }
    if (count >= 12 && count < 18) {
      return (
        <div>
          <p className='has-text-centered q '> {this.props.preguntas.q3} </p>
        </div>
      )
    }
    if (count >= 18 && count < 24) {
      return (
        <div>
          <p className='has-text-centered q'> {this.props.preguntas.q4} </p>
        </div>
      )
    } else {
      return <div><p>Terminamos. Sos ?</p></div>
    }
  }
}

export default Question
