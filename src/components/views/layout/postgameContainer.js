import React, { Component } from 'react'
import transformName from '../../model/transformName'

class PostgameContainer extends Component {
  posiciones = this.props.finalPositions()

  render () {
    return (
      <div>
        <p className='subtitle has-text-white'>
          Sos {' '}
          {transformName(this.posiciones[5])}
          . También te podemos decir que estás cerca de {' '}
          {transformName(this.posiciones[4])}
          {' '} y lejos de {' '}
          {transformName(this.posiciones[0])}
        </p>
      </div>
    )
  }
}

export default PostgameContainer
