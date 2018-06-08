import React, { Component } from 'react'
import transformName from '../../helpers/transformName'
import ResultModal from './resultModal'
import OptionButton from '../ui-elements/optionButton'

class PostgameContainer extends Component {
  posiciones = this.props.finalPositions()

  render () {
    return (
      <section id='postgame' className='mapa hero is-fullheight'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h1 className='title has-text-white'>
              Sos {' '}
              <span className='Cinzel has-font-has-text-weight-bold '>
                {transformName(this.posiciones[5])}.
              </span><br /><br />
              <span>
                También te podemos decir que estás cerca de {' '}
                {transformName(this.posiciones[4])}
                {' '} y lejos de {' '}
                {transformName(this.posiciones[0])}.
              </span>
            </h1>
            <div id='shares' className='p-t-32 has-text-weight-bold'>
              <OptionButton>
                {' '}
                <i className='fa fa-facebook-square' />
                {' '}
                COMPARTIR EN FACEBOOK
              </OptionButton>
              <OptionButton>
                {' '}
                <i className='fa fa-twitter' />
                {' '} COMPARTIR EN TWITTER{' '}
              </OptionButton>
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
