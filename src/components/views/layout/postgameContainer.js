/* global FB */

import React, { Component } from 'react'
import transformName from '../../helpers/transformName'
import ResultModal from './resultModal'
import OptionButton from '../ui-elements/optionButton'

class PostgameContainer extends Component {
  postgameDivElement = React.createRef()
  devolucionH1Element = React.createRef()

  posiciones = this.props.finalPositions()


  restart() {
    window.location.reload()
  }

  getDifference = () => {
    if (
      this.props.characterScore[this.posiciones[5]] -
      this.props.characterScore[this.posiciones[4]] ===
      0
    ) {
      return 'te parecés muchísimo a '
    }
    if (
      this.props.characterScore[this.posiciones[5]] -
      this.props.characterScore[this.posiciones[4]] ===
      1
    ) {
      return 'te parecés mucho a '
    }
    if (
      this.props.characterScore[this.posiciones[5]] -
      this.props.characterScore[this.posiciones[4]] ===
      2
    ) {
      return 'te parecés a'
    } else {
      return 'tenés algunas cositas de '
    }
  }


  getResult() {
    return this.devolucionH1Element.current.textContent
  }


  postToTwitter = () => {
    let result = this.getResult()
    let p1 = encodeURIComponent(
      'Hice el test para saber qué personaje de #GOT soy y me salió: "'
    )
    let p2 = encodeURIComponent('" Podés hacerlo en: https://test-got.now.sh')
    const twitterWindow = window.open(
      `https://twitter.com/intent/tweet?text=${p1}${result}${p2}`
    )
    if (twitterWindow.focus) {
      twitterWindow.focus()
    }
  }

  render() {
    return (
      <section
        id='postgame'
        className='mapa hero is-fullheight'
        ref={this.postgameDivElement}
      >
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h1
              className='title has-text-white'
              id='devolucion'
              ref={this.devolucionH1Element}
            >
              Sos {' '}
              <span className='Cinzel has-font-has-text-weight-bold' id="winningCharacter">
                {transformName(this.posiciones[5])}.
              </span><br /><br />
              <span>
                También te podemos decir que {' '} {this.getDifference()} {' '}
                {transformName(this.posiciones[4])}
                {' '} y que estás lejos de {' '}
                {transformName(this.posiciones[0])}.
              </span>
            </h1>
            <div id='shares' className='p-t-32 has-text-weight-bold'>
              <OptionButton onClick={this.restart}>
                {' '}
                <i className='fa fa-repeat' />
                {' '}
                REHACER TEST
              </OptionButton>

              <OptionButton onClick={this.postToTwitter}>
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
