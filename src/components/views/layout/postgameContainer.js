import React, { Component } from 'react'
import transformName from '../../model/transformName'
import ResultModal from './resultModal'

class PostgameContainer extends Component {
  posiciones = this.props.finalPositions()

  render () {
    return (
      <section id='game' className='hero-body'>
        <p className='subtitle has-text-white'>
          Sos {' '}
          {transformName(this.posiciones[5])}
          . También te podemos decir que estás cerca de {' '}
          {transformName(this.posiciones[4])}
          {' '} y lejos de {' '}
          {transformName(this.posiciones[0])}
        </p>
        <div id='shares'>
          COMPARTIR EN FACEBOOK - COMPARTIR EN TWITTER
        </div>

        <ResultModal
          characterProfile={this.props.characterProfile}
          finalPositions={this.props.finalPositions}
        />
      </section>
    )
  }
}

export default PostgameContainer
