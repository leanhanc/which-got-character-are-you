import React, { Component } from 'react'
import transformName from '../../model/transformName'

class PostgameContainer extends Component {
  posiciones = this.props.finalPositions()

  render () {
    return (
      <section id='postgame'>
        <div id='result'>
          <p className='subtitle has-text-white'>
            Sos {' '}
            {transformName(this.posiciones[5])}
            . También te podemos decir que estás cerca de {' '}
            {transformName(this.posiciones[4])}
            {' '} y lejos de {' '}
            {transformName(this.posiciones[0])}
          </p>
        </div>
        <div id='shares' />
        COMPARTIR EN FACEBOOK - COMPARTIR EN TWITTER
      </section>
    )
  }
}

export default PostgameContainer
