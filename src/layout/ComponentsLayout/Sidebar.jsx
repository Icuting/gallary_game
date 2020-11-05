import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { PATH } from "../../const";
import logo from '../../image/logo.png'
import Input from '../../components/FieldComponetns/Input';
import { v4 } from 'uuid';

const navLink = [
  { name: 'Главная', to: PATH.Home },
  { name: 'Профиль', to: PATH.Profile },
  { name: 'Галерея игр', to: PATH.ListGame },
  { name: 'Достижения', to: PATH.Progress },
  { name: 'Помощь', to: PATH.Help },
  { name: 'О нас', to: PATH.About },
]

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(true);
  const sidebarMenu = sidebar ? 'open' : 'close';
  return (
    <>
      <div onClick={() => setSidebar(!sidebar)} className={`sidebar-show ${sidebarMenu}`}></div>
      <div className={sidebar ? 'sidebar' : 'sidebar-none'}>
        <div className={'sidebar-content'}>
          <div className={'sidebar-content-logo'}>
            <img alt={'logo'} src={logo} />
          </div>
          <div className='sidebar-content-search'>
            <Input
              type={'text'}
              name={'Поиск'}
              id={v4()}
            />
          </div>
          <nav className={'sidebar-content-nav'}>
            <ul className={'sidebar-content-nav-list'}>
              {navLink.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setSidebar(!sidebar)}
                  >
                    <NavLink
                      className={'sidebar-content-nav-list-link'}
                      to={item.to}>
                      {item.name}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
export default Sidebar