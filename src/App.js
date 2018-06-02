// React
import React, { Component } from 'react'
// Layout
import Header from './components/views/layout/Header'
import QuestionContainer from './components/views/layout/questionContainer'

// Helpers

import PersonajeAfectado from './components/model/affectedCharacter'

// Servicios
import axios from 'axios'
// Estilos
import 'bulma/css/bulma.min.css'
import './App.css'

class Root extends Component {
  //! State
  state = {
    characterScore: { CL: 0, PB: 0, SS: 0, JS: 0, TL: 0, DT: 0 },
    characterResponses: { cr_0: {}, cr_1: {}, cr_2: {}, cr_3: {} },
    questions: [],
    secuenceNum: 0
  }

  // ! Lifecyle Hooks
  componentDidMount () {
    // ? Fetch all questions
    this.fetchQuestions()
    this.fetchCharacterResponses()
  }

  // ! Methods

  fetchQuestions = () => {
    const mongoLab = process.env.REACT_APP_APIKEY
    axios
      .get(
        `https://api.mlab.com/api/1/databases/testgot/collections/questions?apiKey=${mongoLab}`
      )
      .then(response => {
        const questions = response.data[0]
        this.setState({ questions })
      })
      .catch(e => console.log(e))
  }

  fetchCharacterResponses = () => {
    const mongoLab = process.env.REACT_APP_APIKEY
    axios
      .get(
        `https://api.mlab.com/api/1/databases/testgot/collections/character_responses?apiKey=${mongoLab}`
      )
      .then(response => {
        const characterResponses = response.data[0]
        this.setState({ characterResponses })
      })
      .catch(e => console.log(e))
  }

  computeAnswer = valueToCompute => {
    let QNum = this.state.secuenceNum
    let pj = PersonajeAfectado(QNum)
    const characterScore = { ...this.state.characterScore }
    characterScore[pj] = Number(characterScore[pj]) + Number(valueToCompute)
    console.log(characterScore[pj])
    this.setState({ characterScore })
    QNum = QNum + 1
    this.setState({ secuenceNum: QNum })
  }
  // ! Render

  render () {
    return (
      <div className='container has-background-black'>
        <Header />
        <QuestionContainer
          secuenceNum={this.state.secuenceNum}
          preguntas={this.state.questions}
          renderAnswer={this.state.renderAnswer}
          characterResponses={this.state.characterResponses}
          characterScore={this.state.characterScore}
          computeAnswer={this.computeAnswer}
        />
      </div>
    )
  }
}

export default Root
