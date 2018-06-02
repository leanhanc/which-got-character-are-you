import React, { Component } from 'react'

class Answer extends Component {
  render () {
    return (
      <div className='has-text-centered p-t-20 has-text-weight-bold'>
        <p> {this.props.characterResponses.cr_0[this.props.answerNumRender]}</p>
      </div>
    )
  }
}

export default Answer
