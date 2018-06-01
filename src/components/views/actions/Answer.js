import React, { Component } from 'react'

class Answer extends Component {
  render () {
    return (
      <p className='has-text-centered p-t-20 has-text-weight-bold'>
        {this.props.characterResponses.cr1.a}
      </p>
    )
  }
}

export default Answer
