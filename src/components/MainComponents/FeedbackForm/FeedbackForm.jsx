import React from "react";
import Input from "../../FieldComponetns/Input";
import { v4 } from 'uuid';
import TextArea from "../../FieldComponetns/TextArea";


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
            <Input
              id={v4()}
              type={'text'}
              name={'Тема возникшей проблемы'}
            />
            <TextArea
              id={v4()}
              name={'Опишите возникшую проблему'}
            />
            <Input
              type={'text'}
              id={v4()}
              name={'Email'}
            />
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