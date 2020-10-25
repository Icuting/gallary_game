import React from "react";

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='feedback'>
        <h5 className={'feedback-title'}>
          Если у вас позникли проблемы, то вы можете оставить заявку с проблемой и мы постараемся решить ее в ближайшее
          время
        </h5>
        <form className={'feedback-form'}>
          <div className={'feedback-form-group-theme'}>
            <input
              id={'input_theme'}
              className={'feedback-form_input'}
              required={true}
              type={'text'}/>
            <label htmlFor={'input_theme'}>
              Тема возникшей проблемы
            </label>
          </div>
          <div className={'feedback-form-group-description'}>
            <textarea required={true} id={'input_description'} className={'feedback-form_textarea'}/>
            <label htmlFor={'input_description'}>
              Опишите возникшую проблему
            </label>
          </div>
          <div className={'feedback-form-group-email'}>
            <input
              id={'input_email'}
              className={'feedback-form_input'}
              required={true}
              type={'text'}/>
            <label htmlFor={'input_email'}>
              Email
            </label>
          </div>
          <div className={'feedback-form-group-screenshot'}>
            <div className={'circle-animation'}>
            </div>
            <input
              id={'input_screenshot'}
              className={'feedback-form_input'}
              type={'file'}/>
            <label htmlFor={'input_screenshot'}>
              Добавить скриншоты
            </label>
          </div>
          <button className={'main-button'} type={'button'}>Отправить</button>
        </form>
      </div>
    )
  }
}

export default FeedbackForm