import React from "react";
import { NavLink } from 'react-router-dom'
import {PATH} from "../const";

const Help = ({children}) => {
  return(
    <div className={'help'}>
      <div className={'help-nav'}>
        <NavLink to={PATH.Faq} >FAQ</NavLink>
        <NavLink to={PATH.HelpForm} >Возникли проблемы?</NavLink>
      </div>
      <div className={'help-content'}>
        {children}
      </div>
    </div>
  )
}
export default Help