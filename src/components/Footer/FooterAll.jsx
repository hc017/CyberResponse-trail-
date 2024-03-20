import React from 'react'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom"
import Home from '../../Pages/Home/Home'

const FooterAll = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
   </Routes>
  )
}

export default FooterAll