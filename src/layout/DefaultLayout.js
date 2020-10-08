import React from "react";
import Header from "./ComponentsLayout/Header";
import Sidebar from "./ComponentsLayout/Sidebar";
import Footer from "./ComponentsLayout/Footer";
import {Row, Col} from 'react-bootstrap'

const DefaultLayout = ({children, noSidebar = true, noHeader = true}) => {
  return (
    <>
      {noHeader ? <Header/> : null}
      <div className='content'>
        {noSidebar ? <Sidebar/> : null}
        <div className="main-content">{children}</div>
      </div>
      <Footer/>
    </>
  )
}
export default DefaultLayout