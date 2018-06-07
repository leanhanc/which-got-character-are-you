import React from 'react'
import ModalButton from '../ui-elements/modalButton'
import FormatText from 'react-format-text'

class Modal extends React.Component {
  closeModal () {
    document.getElementById('modal').classList.remove('is-active')
  }

  render () {
    return (
      <div
        className='modal is-active animated zoomIn is-overlay'
        id='modal'
        onClick={this.closeModal}
      >
        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>
              En Game of Thrones sos...
            </p>
            <button className='delete' aria-label='close' />
          </header>
          <section className='modal-card-body has-text-centered'>
            <h1 className='title has-text-weight-bold'>
              {this.props.characterProfile.name}
            </h1>
            <h5 className='subtitle'>
              <i>{this.props.characterProfile.alias}</i>
            </h5>
            <div id='characterPic' className='has-text-centered'>
              <img src={`${this.props.characterProfile.pic}`} />
            </div>
            <hr />
            <div className='content'>
              <FormatText>{this.props.characterProfile.dixit}</FormatText>
            </div>
            <hr />
            <FormatText>{this.props.characterProfile.bio}</FormatText>
          </section>
          <footer className='modal-card-foot has-text-centered'>
            <ModalButton onClick={this.closeModal}> Continuar </ModalButton>
          </footer>
        </div>
      </div>
    )
  }
}

export default Modal
