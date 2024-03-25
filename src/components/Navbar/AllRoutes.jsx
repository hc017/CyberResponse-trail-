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
import SuspectD from '../../Pages/IncidentDetails/SuspectD'
import ID_main from '../../Pages/IncidentDetails/ID_main'
import Complaint_details from '../../Pages/IncidentDetails/Complaint_details'
import Submit from '../../Pages/IncidentDetails/Submit'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/userdetails' element={<UserDetails/>}></Route>
    <Route path='/trackcomplaint' element={<TrackComplaint/>}></Route>
    <Route path='/incidentdetails' element={<ID_main/>}></Route>
    <Route path='/suspectdetails' element={<SuspectD/>}></Route>
    <Route path='/complaintdetails' element={<Complaint_details/>}></Route>
    <Route path='/submit' element={<Submit/>}></Route>

   </Routes>
  )
}

export default AllRoutes