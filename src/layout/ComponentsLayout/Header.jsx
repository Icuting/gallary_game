import React from "react";
import Notification from './navbar/notification';
import User from './navbar/user';


const Header = () => {
  return (
    <div className='header'>
      <div className={'header-content'}>
        <div className={'header-content-search'} >

          <input
            required={true}
            id={'search-header'}
            className={'header-content-search_input'}
            type={'text'}
            placeholder={'Поиск...'}
          />
          <label className={'header-content-search_label'} htmlFor={'search-header'}></label>
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