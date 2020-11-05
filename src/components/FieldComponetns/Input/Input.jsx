import React from "react";

const Input = (props) =>{
  const {
    id,
    name,
    type = 'text',
    className = '',
  } = props
  return(
    <div className={'form-main-input'}>
      <input
        id={id}
        className={'form-main-input-field'}
        required={true}
        type={type}/>
      <label htmlFor={id}>
        {name}
      </label>
    </div>
  )
}
export default Input