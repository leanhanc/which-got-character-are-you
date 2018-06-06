// React
import React, { Component } from 'react'
// Layout
import Header from './components/views/layout/Header'
import QuestionContainer from './components/views/layout/questionContainer'
import ResultModal from './components/views/layout/resultModal'
import PostgameContainer from './components/views/layout/postgameContainer'

// Helpers

import PersonajeAfectado from './components/model/affectedCharacter'
import CalculatePositions from './components/model/calculatePositions'

// Servicios
import axios from 'axios'
import { Styled, ThemeProvider } from 'styled-components'
// Estilos
import 'bulma/css/bulma.min.css'
import './App.css'
import 'animate.css/animate.min.css'
import { theme } from './themeWrapper'

class Root extends Component {
  //! State
  state = {
    characterScore: { CL: 0, PB: 0, SS: 0, JS: 0, TL: 0, DT: 0 },
    characterResponses: { cr_0: {}, cr_1: {}, cr_2: {}, cr_3: {} },
    characterProfile: {
      initials: '',
      name: '',
      alias: '',
      bio: '',
      dixit: '',
      pic: ''
    },
    questions: [],
    secuenceNum: 0,
    showModal: false,
    gameOver: false
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
    // Identificar a qué personaje corresponde la pregunta
    let pj = PersonajeAfectado(QNum)
    // Copiar la tabla de posiciones de personajes en el actual estado de la app
    const characterScore = { ...this.state.characterScore }
    characterScore[pj] = Number(characterScore[pj]) + Number(valueToCompute)
    // Actualizar la tabla de posiciones de personajes
    this.setState({ characterScore })
    // Pasar el estado de la app a la siguiente pregunta
    QNum = ++QNum
    this.setState({ secuenceNum: QNum })
    if (QNum === 24) {
      this.finalPositions()
    }
  }

  fetchCharacterProfile (personajeGanador) {
    const setGameOver = { gameOver: true }
    this.setState(setGameOver)
    const mongoLab = process.env.REACT_APP_APIKEY
    axios
      .get(
        `https://api.mlab.com/api/1/databases/testgot/collections/character_profile?q={"initials":"${personajeGanador}"}&apiKey=${mongoLab}`
      )
      .then(response => {
        const characterProfile = response.data[0]
        this.setState({ characterProfile })
      })
      .then(() => {
        const showModal = { showModal: true }
        this.setState(showModal)
      })
      .catch(e => console.log(e))
  }

  finalPositions = () => {
    let posiciones = { ...this.state.characterScore }
    let posicionesFinal = CalculatePositions(posiciones)
    if (this.state.characterProfile.name === '') {
      this.fetchCharacterProfile(posicionesFinal[5])
    }
    return posicionesFinal
  }
  // ! Render

  render () {
    return (
      <ThemeProvider theme={theme}>
        <div className='container has-background-black'>
          <Header />
          {!this.state.gameOver
            ? <QuestionContainer
              secuenceNum={this.state.secuenceNum}
              preguntas={this.state.questions}
              renderAnswer={this.state.renderAnswer}
              characterResponses={this.state.characterResponses}
              characterScore={this.state.characterScore}
              computeAnswer={this.computeAnswer}
              finalPositions={this.finalPositions}
              gameOver={this.gameOver}
              />
            : <div>
              <PostgameContainer finalPositions={this.finalPositions} />
              <ResultModal
                characterProfile={this.state.characterProfile}
                finalPositions={this.finalPositions}
                />
            </div>}
        </div>
      </ThemeProvider>
    )
  }
}

export default Root
