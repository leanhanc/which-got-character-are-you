/* global FB */

import React, { Component } from 'react'
import transformName from '../../helpers/transformName'
import ResultModal from './resultModal'
import OptionButton from '../ui-elements/optionButton'

class PostgameContainer extends Component {
  postgameDivElement = React.createRef()
  devolucionH1Element = React.createRef()

  posiciones = this.props.finalPositions()

  componentDidMount () {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '183788922213944',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.11'
      })
    }
    ;(function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }

  restart () {
    window.location.reload()
  }

  getDifference = props => {
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

  getResult () {
    return this.devolucionH1Element.textContent
  }

  postToFacebook = props => {
    let result = this.getResult()
    FB.ui({
      method: 'share_open_graph',
      action_type: 'og.shares',
      action_properties: JSON.stringify({
        object: {
          'og:url': 'https://testgot.now.sh/',
          'og:title': '¿Quién sos en Game of Thrones?',
          'og:description': 'Hice el test para saber qué personaje de GOT soy y me salió: "' +
            result +
            '"',
          'og:image:type': 'image/jpg',
          'og:image': `https://testgot.now.sh/${this.props.characterProfile.share}`
        }
      })
    })
  }

  postToTwitter = props => {
    let result = this.getResult()
    let p1 = encodeURIComponent(
      'Hice el test para saber qué personaje de #GOT soy y me salió: "'
    )
    let p2 = encodeURIComponent('" Podés hacerlo en: https://testgot.now.sh')
    const twitterWindow = window.open(
      `https://twitter.com/intent/tweet?text=${p1}${result}${p2}`
    )
    if (twitterWindow.focus) {
      twitterWindow.focus()
    }
  }
  render () {
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
              <span className='Cinzel has-font-has-text-weight-bold '>
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
              <OptionButton onClick={this.postToFacebook}>
                {' '}
                <i className='fa fa-facebook-square' />
                {' '}
                COMPARTIR EN FACEBOOK
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
