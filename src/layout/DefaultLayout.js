import React from "react";
import Header from "./ComponentsLayout/Header";
import Sidebar from "./ComponentsLayout/Sidebar";
import Footer from "./ComponentsLayout/Footer";

const DefaultLayout = ({childeren, noSidebar = true, noHeader = true})=>{
  return(
    <>
      {noHeader ? <Header/> : null}
      {noSidebar ? <Sidebar/> : null}
      {childeren}
      <Footer/>
    </>
  )
}
export default DefaultLayout