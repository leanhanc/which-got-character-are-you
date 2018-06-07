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
        className='modal is-active animated tada is-overlay'
        id='modal'
        onClick={this.closeModal}
      >
        <div className='modal-background' />
        <div className='modal-card modalRadius'>
          <section className='modal-card-body has-text-centered pergamino has-text-dark'>
            <h1 className='title has-text-weight-bold' />
            <h5 className='subtitle  has-text-dark' />
            <div className='columns is-variable is-4'>
              <div
                id='characterPic'
                className='has-text-centered imgPersonaje is-one-third'
              >
                <h2 className='gotFont p-b-16 is-size-4'>
                  {this.props.characterProfile.name}
                </h2>
                <img src={`${this.props.characterProfile.pic}`} />
                <span>
                  <i className='has-text-grey-light'>
                    {this.props.characterProfile.alias}
                  </i>
                </span>
              </div>
              <div className='container is-two-thirds has-text-grey-dark'>
                <blockquote>
                  <i>
                    <span>
                      {' '}
                      <FormatText>
                        {this.props.characterProfile.dixit}
                      </FormatText>
                    </span>
                  </i>
                </blockquote>
                <span className='p-t-24'>
                  <FormatText>{this.props.characterProfile.bio}</FormatText>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Modal
