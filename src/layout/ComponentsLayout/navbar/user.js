import React from 'react'
import { Dropdown } from "react-bootstrap";
import { v4 } from 'uuid'
import {Link} from "react-router-dom";
import {PATH} from "../../../const";
import avatar from '../../../image/avatar.png';
const User = () =>{
    return(
      <Dropdown>
        <Dropdown.Toggle
          as={'div'}
          id={v4()}
          className={'header-content-profile'}>
          <img src={avatar} className={'header-content-profile_avatar'} />
          <p className={'header-content-profile_your-name'}>Igris</p>
        </Dropdown.Toggle>
        <Dropdown.Menu className={'header-content-profile-dropdown'}>
          <Link className={'header-content-profile-dropdown-item'} to={PATH.Profile}>Профиль</Link>
          <Link className={'header-content-profile-dropdown-item'} to={PATH.Profile}>Изменить профиль</Link>
        </Dropdown.Menu>
      </Dropdown>
    )
}
export default User