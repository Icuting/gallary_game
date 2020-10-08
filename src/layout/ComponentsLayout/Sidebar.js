import React, {useState} from "react";
import {NavLink} from 'react-router-dom'
import {PATH} from "../../const";
import logo from '../../image/logo.png'

const navLink = [
  {name: 'Главная', to: PATH.Home},
  {name: 'Профиль', to: PATH.Profile},
  {name: 'Галерея игр', to: PATH.ListGame},
  {name: 'Достижения', to: PATH.Progress},
  {name: 'Помощь', to: PATH.Help},
  {name: 'О нас', to: PATH.About},
]

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarMenu = sidebar ? 'show' : 'hid';
  return (
    <>
      <div onClick={() => setSidebar(!sidebar)} className={`sidebar-show ${sidebarMenu}`}></div>
      <div className={sidebar ? 'sidebar-none' : 'sidebar'}>
        <div className={'sidebar-content'}>
          <div className={'sidebar-content-logo'}>
            <img alt={'logo'} src={logo}/>
          </div>
          <nav className={'sidebar-content-nav'}>
            <ul className={'sidebar-content-nav-list'}>
              {navLink.map((item, index) => {
                return (
                  <li key={index}>
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