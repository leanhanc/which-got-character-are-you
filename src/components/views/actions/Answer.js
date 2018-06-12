import React, { Component } from 'react'

class Answer extends Component {
  render () {
    const {
      answerNumRender: { count },
      answerNumRender,
      characterResponses
    } = this.props

    const className =
      'has-text-centered p-t-20 has-text-weight-bold respuesta animated'

    if (answerNumRender >= 0 && answerNumRender < 6) {
      return (
        <div className={className}>
          <p>
            {characterResponses.cr_0[answerNumRender]}
          </p>
        </div>
      )
    }

    if (answerNumRender >= 6 && answerNumRender < 12) {
      return (
        <div className={className}>
          <p>
            {characterResponses.cr_1[answerNumRender]}
          </p>
        </div>
      )
    }
    if (answerNumRender >= 12 && answerNumRender < 18) {
      return (
        <div className={className}>
          <p>
            {characterResponses.cr_2[answerNumRender]}
          </p>
        </div>
      )
    }
    if (answerNumRender >= 18 && answerNumRender < 24) {
      return (
        <div className={className}>
          <p>
            {characterResponses.cr_3[answerNumRender]}
          </p>
        </div>
      )
    }
    return null
  }
}

export default Answer
