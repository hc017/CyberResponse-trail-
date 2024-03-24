import React from 'react'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom"
import Home from '../../Pages/Home/Home'
import Login from '../../Pages/LoginRegister/Login'
import Register from '../../Pages/LoginRegister/Register'
import UserDetails from '../../Pages/UserDetails/UserDetails'
import TrackComplaint from '../../Pages/TrackComplaint/TrackComplaint'
import ID from '../../Pages/IncidentDetails/ID'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/userdetails' element={<UserDetails/>}></Route>
    <Route path='/trackcomplaint' element={<TrackComplaint/>}></Route>
    <Route path='/incidentdetails' element={<ID/>}></Route>

   </Routes>
  )
}

export default AllRoutes