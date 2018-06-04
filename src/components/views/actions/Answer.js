import React, { Component } from 'react'

class Answer extends Component {
  render () {
    let count = this.props.answerNumRender
    if (count >= 0 && count < 6) {
      return (
        <div className='has-text-centered p-t-20 has-text-weight-bold respuesta animated'>
          <p>
            {this.props.characterResponses.cr_0[this.props.answerNumRender]}
          </p>
        </div>
      )
    }

    if (count >= 6 && count < 12) {
      return (
        <div className='has-text-centered p-t-20 has-text-weight-bold respuesta animated'>
          <p>
            {this.props.characterResponses.cr_1[this.props.answerNumRender]}
          </p>
        </div>
      )
    }
    if (count >= 12 && count < 18) {
      return (
        <div className='has-text-centered p-t-20 has-text-weight-bold respuesta animated'>
          <p>
            {this.props.characterResponses.cr_2[this.props.answerNumRender]}
          </p>
        </div>
      )
    }
    if (count >= 18 && count < 24) {
      return (
        <div className='has-text-centered p-t-20 has-text-weight-bold respuesta animated'>
          <p>
            {this.props.characterResponses.cr_3[this.props.answerNumRender]}
          </p>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Answer
