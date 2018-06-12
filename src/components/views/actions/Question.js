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
  currentQuestion = props => {
    const { secuenceNum: enunciadoActual } = this.props
    if (enunciadoActual >= 0 && enunciadoActual < 6) {
      return 'q1'
    }
    if (enunciadoActual >= 6 && enunciadoActual < 12) {
      return 'q2'
    }
    if (enunciadoActual >= 12 && enunciadoActual < 18) {
      return 'q3'
    }
    if (enunciadoActual >= 18 && enunciadoActual < 6) {
      return 'q4'
    }
  }
  render () {
    const { secuenceNum: count, preguntas } = this.props
    const renderQ = this.currentQuestion()

    return (
      <div className='pregunta animated slideInLeft'>
        <p className='has-text-centered q'>
          {preguntas[renderQ]}
        </p>
      </div>
    )
  }
}

export default Question
