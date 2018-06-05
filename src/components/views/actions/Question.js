import React, { Component } from 'react'

class Question extends Component {
  componentDidUpdate () {
    // Chequear si va a cambiar la pregunta, entonces quitar clase de slideIn para permitir agregarla
    if (
      this.props.secuenceNum === 5 ||
      this.props.secuenceNum === 11 ||
      this.props.secuenceNum === 17
    ) {
      let get = document.getElementsByClassName('pregunta')
      get[0].classList.remove('slideInLeft')
    }
    if (
      this.props.secuenceNum === 6 ||
      this.props.secuenceNum === 12 ||
      this.props.secuenceNum === 18
    ) {
      let get = document.getElementsByClassName('pregunta')
      get[0].classList.add('slideInLeft')
    }
  }
  render () {
    let count = this.props.secuenceNum
    if (count >= 0 && count < 6) {
      return (
        <div className='pregunta animated slideInLeft'>
          <p className='has-text-centered q'>
            {this.props.preguntas.q1}
          </p>
        </div>
      )
    }
    if (count >= 6 && count < 12) {
      return (
        <div className='pregunta animated slideInLeft'>
          <p className='has-text-centered q'>
            {this.props.preguntas.q2}
          </p>
        </div>
      )
    }
    if (count >= 12 && count < 18) {
      return (
        <div className='pregunta animated slideInLeft'>
          <p className='has-text-centered q'>
            {this.props.preguntas.q3}
          </p>
        </div>
      )
    }
    if (count >= 18 && count < 24) {
      return (
        <div className='pregunta animated slideInLeft'>
          <p className='has-text-centered q'>
            {this.props.preguntas.q4}
          </p>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Question
