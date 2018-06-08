import React, { Component } from 'react'
import transformName from '../../helpers/transformName'
import ResultModal from './resultModal'

class PostgameContainer extends Component {
  posiciones = this.props.finalPositions()

  render () {
    return (
      <section id='postgame' className='mapa hero is-fullheight'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title has-text-white'>
              Sos {' '}
              <span className='Cinzel has-font-has-text-weight-bold'>
                {transformName(this.posiciones[5])}.
              </span>
              También te podemos decir que estás cerca de {' '}
              {transformName(this.posiciones[4])}
              {' '} y lejos de {' '}
              {transformName(this.posiciones[0])}
            </h1>
            <div id='shares'>
              COMPARTIR EN FACEBOOK - COMPARTIR EN TWITTER
            </div>
          </div>
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
