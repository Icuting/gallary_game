import React from "react";

const TextArea = (props) =>{
  const {
    id,
    name,
    className = '',
  } = props
  return(
    <div className={'form-main-textarea'}>
      <textarea
        className={'form-main-textarea-field'}
        required={true}
        id={id}
      />
      <label htmlFor={id}>
        {name}
      </label>
    </div>
  )
}
export default TextArea