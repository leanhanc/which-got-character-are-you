import React from 'react'
import ModalButton from '../ui-elements/modalButton'
import FormatText from 'react-format-text'

class Modal extends React.Component {
  closeModal () {
    document.getElementById('modal').classList.remove('is-active')
  }
  componentDidMount () {
    setTimeout(() => {
      document.getElementById('modalButton').style.visibility = 'visible'
    }, 1000)
  }

  render () {
    const { characterProfile: character } = this.props
    return (
      <div
        className='modal is-active animated tada is-overlay'
        id='modal'
        onClick={this.closeModal}
      >
        <div className='modal-background' />
        <div className='modal-card modalRadius'>
          <section className='modal-card-body has-text-centered pergamino has-text-dark is-vcentered'>
            <div className='columns'>
              <div
                id='characterPic'
                className='container column has-text-centered imgPersonaje'
              >
                <h2 className='gotFont p-b-32 is-size-4 has-text-centered'>
                  {character.name}
                </h2>
                <img src={character.pic} />
                <br />
                <span>
                  <i className='has-text-grey-light is-size-6'>
                    {character.alias}
                  </i>
                </span>
              </div>
              <div className='column bio'>
                <FormatText>
                  {character.bio}
                </FormatText>
              </div>
            </div>
            <i className='has-text-dark has-text-centered has-text-weight-bold Cinzel'>
              <FormatText>
                {character.dixit}
              </FormatText>
            </i>
            <ModalButton id='modalButton'>
              CONTINUAR
            </ModalButton>
          </section>
        </div>
      </div>
    )
  }
}

export default Modal
