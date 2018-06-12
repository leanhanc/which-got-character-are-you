import React, { Component } from 'react'

class Question extends Component {
  componentDidUpdate () {
    const { secuenceNum } = this.props
    // Chequear si va a cambiar la pregunta, entonces quitar clase slideIn para permitir agregarla
    if (secuenceNum === 5 || secuenceNum === 11 || secuenceNum === 17) {
      let get = document.getElementsByClassName('pregunta')
      get[0].classList.remove('slideInLeft')
    }
    if (secuenceNum === 6 || secuenceNum === 12 || secuenceNum === 18) {
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
    return 'q4'
  }

  render () {
    const { preguntas } = this.props
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
