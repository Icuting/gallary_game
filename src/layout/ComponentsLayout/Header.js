import React from "react";

import Notification from './navbar/notification';
import User from './navbar/user';

const Header = () => {
  return (
    <div className='header'>
      <div className={'header-content'}>
        <div className={'header-content-logo'}>
          <div className={'logo-text'}></div>
        </div>
        <div className={'header-content-search'} >
          <input
            className={'header-content-search_input'}
            type={'text'}
            placeholder={'Введите для поиска'}
          />
        </div>
        <div className='header-content-user'>
          <Notification />
          <User />
        </div>
      </div>
    </div>
  )
}
export default Header