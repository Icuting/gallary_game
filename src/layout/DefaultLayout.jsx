import React from "react";
import Header from "./ComponentsLayout/Header";
import Sidebar from "./ComponentsLayout/Sidebar";
import Footer from "./ComponentsLayout/Footer";



const DefaultLayout = ({children, noSidebar = true, noHeader = true}) => {
  return (
    <>
      {noHeader ? <Header/> : null}
      {noSidebar ? <Sidebar/> : null}
      <div className='content'>
        <div className="main-content">{children}</div>
      </div>
      <Footer/>
    </>
  )
}
export default DefaultLayout