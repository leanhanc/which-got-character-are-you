// React
import React, { Component } from 'react'
// Layout
import Header from './components/views/layout/Header'
import Question from './components/views/ui-elements/Question'

// Servicios
import axios from 'axios'
// Estilos
import 'bulma/css/bulma.min.css'
import './App.css'

class Root extends Component {
  //! State
  state = {
    secuenceNum: 0,
    questions: {},
    characterResponses: { cr1: {}, cr2: {}, cr3: {}, cr4: {} },
    renderAnswer: 'cr1.a'
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

  // ! Render

  render () {
    return (
      <div className='container has-background-black'>
        <Header />
        <Question
          secuenceNum={this.state.secuenceNum}
          preguntas={this.state.questions}
          renderAnswer={this.state.renderAnswer}
          characterResponses={this.state.characterResponses}
        />
      </div>
    )
  }
}

export default Root
