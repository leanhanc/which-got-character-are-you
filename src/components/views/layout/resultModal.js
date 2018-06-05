import React from 'react'
import ModalButton from '../ui-elements/modalButton'
import FormatText from 'react-format-text'

class Modal extends React.Component {
  render () {
    return (
      <div className='modal is-active animated zoomIn' id='modalPersonaje'>
        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>
              En Game of Thrones sos...
            </p>
            <button className='delete' aria-label='close' />
          </header>
          <section className='modal-card-body has-text-centered line-hight'>
            <h1 className='title'>{this.props.characterProfile.name}</h1>
            <h5 className='subtitle'>
              <i>{this.props.characterProfile.alias}</i>
            </h5>
            <hr />
            <FormatText>{this.props.characterProfile.dixit}</FormatText>
            <hr />
            <FormatText>{this.props.characterProfile.bio}</FormatText>
          </section>
          <footer className='modal-card-foot has-text-centered'>
            <ModalButton> Continuar </ModalButton>
          </footer>
        </div>
      </div>
    )
  }
}

export default Modal
