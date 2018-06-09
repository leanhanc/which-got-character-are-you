import React from 'react'
import Houses from './houses'
import MainButton from '../ui-elements/mainButton'

class Header extends React.Component {
  componentDidMount () {
    if (window.innerWidth < 1024 && !this.props.startGame) {
      setInterval(
        () => document.getElementById('mainButton').classList.toggle('hover'),
        1000
      )
    }
  }
  render () {
    return (
      <header className='hero is-fullheight'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='Cinzel has-text-centered is-size-4 is-uppercase p-b-24 is-block'>
              Quién sos en
            </h1>
            <h1 className='gotFont has-text-centered is-size-1 is-uppercase'>
              Game of Thrones
            </h1>

            <h3 className='Cinzel has-text-centered is-size-6 is-uppercase contesta'>
              Hace el test y enterate
            </h3>
            <Houses className='m-t-64 has-text-centered' />
            <div id='starButtonContainer has-text-centered'>
              <MainButton
                className='is-centered'
                id='mainButton'
                onClick={event => this.props.begin(event)}
              >
                COMENZAR
              </MainButton>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
