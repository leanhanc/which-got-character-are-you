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
    return (
      <div
        className='modal is-active animated tada is-overlay'
        id='modal'
        onClick={this.closeModal}
      >
        <div className='modal-background' />
        <div className='modal-card modalRadius'>
          <section className='modal-card-body has-text-centered pergamino has-text-dark is-vcentered'>
            <h1 className='title has-text-weight-bold' />
            <div className='columns'>
              <div
                id='characterPic'
                className='container has-text-centered imgPersonaje'
              >
                <h2 className='gotFont p-b-32 is-size-4'>
                  {this.props.characterProfile.name}
                </h2>
                <img src={`${this.props.characterProfile.pic}`} /><br />
                <span>
                  <i className='has-text-grey-light is-size-6'>
                    {this.props.characterProfile.alias}
                  </i>
                </span>
              </div>
              <div className='bio'>
                <FormatText>
                  {this.props.characterProfile.bio}
                </FormatText>
              </div>
            </div>
            <i className='has-text-dark has-text-centered has-text-weight-bold Cinzel'>
              <FormatText>
                {this.props.characterProfile.dixit}
              </FormatText>
            </i>
            <ModalButton id='modalButton' className='animated fadeIn'>
              CONTINUAR
            </ModalButton>
          </section>
        </div>
      </div>
    )
  }
}

export default Modal
