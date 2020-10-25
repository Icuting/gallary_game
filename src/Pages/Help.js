import React, {useState} from "react";
import { Faq, FeedbackForm } from "../components/common";

const Help = (props) => {
  const [content, setContent] = useState(<Faq/>);
  const faqContent = () =>{
    setContent(<Faq/>)
  }
  const helpContent = () =>{
    setContent(<FeedbackForm/>)
  }
  return (
    <div className={'help'}>
      <div className={'help-nav'}>
        <button
          type={'button'}
          onClick={faqContent}
          className={'help-nav-faq main-button'}>
          FAQ
        </button>
        <button
          type={'button'}
          onClick={helpContent}
          className={'help-nav-problem main-button'}>
          Возникли проблемы?
        </button>
      </div>
      <div className={'help-content'}>
        {content}
      </div>
    </div>
  )
}
export default Help