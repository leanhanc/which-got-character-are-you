// React
import React, { Component } from 'react'
// Layout
import Header from './components/views/layout/Header'
import QuestionContainer from './components/views/layout/questionContainer'
import PostgameContainer from './components/views/layout/postgameContainer'
import MedievalOrnaments from './components/views/layout/ornaments'


// Preguntas, respuestas y datos de los personajes
import questions from "./questions/"
import characterResponses from "./characters/responses"
import * as characterProfiles from "./characters/profiles"

// Helpers
import PersonajeAfectado from './components/helpers/affectedCharacter'
import CalculatePositions from './components/helpers/calculatePositions'



// Estilos
import { ThemeProvider } from 'styled-components'
import 'bulma/css/bulma.min.css'
import './App.css'
import 'animate.css/animate.min.css'
import { theme } from './themeWrapper'

class Root extends Component {

  state = {
    characterScore: { DT: 0, PB: 0, TL: 0, JS: 0, CL: 0, SS: 0 },
    characterResponses: { cr_0: {}, cr_1: {}, cr_2: {}, cr_3: {} },
    characterProfile: {
      initials: '',
      name: '',
      alias: '',
      bio: '',
      dixit: '',
      pic: '',
      share: ''
    },
    questions: [],
    secuenceNum: 0,
    totalSecuence: 24,
    showModal: false,
    gameOver: false,
    starGame: false
  }


  componentDidMount() {
    // Get questions and set them to state
    this.setQuestions()
    // Get the question answers
    this.getCharacterResponses()
  }



  setQuestions() {
    this.setState({ questions })
  }

  getCharacterResponses = () => {
    this.setState({ characterResponses })
  }

  beginGame = event => {
    this.setState(prevState => ({
      ...prevState,
      startGame: true
    }))
    window.setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 300)
    event.target.style.display = 'none'
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

  getCharacterProfile(personajeGanador) {
    // Buscar la bio del personaje que más se parece
    this.setState({
      characterProfile: {
        ...characterProfiles[personajeGanador]
      }
    }, () => {
      const showModal = { showModal: true }
      this.setState(showModal)
      window.setTimeout(() => document.getElementById('postgame'), 300)
    })
  }

  finalPositions = () => {
    // Se termiaron las preguntas
    const setGameOver = { gameOver: true }
    this.setState(setGameOver)
    // Se ordenan los personajes en el array de posiciones
    let posiciones = { ...this.state.characterScore }
    let posicionesFinal = CalculatePositions(posiciones)
    // Se obtienen los datos del ganador para mostrarlos en el modal
    if (this.state.characterProfile.name === '') {
      this.getCharacterProfile(posicionesFinal[5])
    }
    // Esconder los botones y mostrar devolución final
    const stopGame = { startGame: false }
    this.setState(stopGame)
    return posicionesFinal
  }

  // ! Render

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div id='wrapper'>
          <MedievalOrnaments />
          <Header gameOn={this.state.startGame} begin={this.beginGame} />
          {this.state.startGame
            && <QuestionContainer
              secuenceNum={this.state.secuenceNum}
              totalSecuence={this.state.totalSecuence}
              preguntas={this.state.questions}
              renderAnswer={this.state.renderAnswer}
              characterResponses={this.state.characterResponses}
              characterScore={this.state.characterScore}
              computeAnswer={this.computeAnswer}
              finalPositions={this.finalPositions}
              gameOver={this.gameOver}
            />
          }
          {this.state.gameOver
            && <section>
              <PostgameContainer
                characterProfile={this.state.characterProfile}
                characterScore={this.state.characterScore}
                finalPositions={this.finalPositions}
              />
            </section>
          }
        </div>
      </ThemeProvider>
    )
  }
}

export default Root
