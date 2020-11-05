import React from "react";

const WindowActions = (props) =>{
  const {
    title,
    children,
    action
  } = props
  return (
    <div className={'window-actions'}>
      <h5 className={'window-actions-title'}>{title}</h5>
      {children}
      <button type={'button'} className={'window-actions-button main-button'}>{action}</button>
    </div>
  )
}
export default WindowActions