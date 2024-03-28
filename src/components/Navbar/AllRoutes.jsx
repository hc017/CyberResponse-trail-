import React from 'react'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom"
import Home from '../../Pages/Home/Home'
import UserDetails from '../../Pages/UserDetails/UserDetails'
import TrackComplaint from '../../Pages/TrackComplaint/TrackComplaint'
import SuspectD from '../../Pages/IncidentDetails/SuspectD'
import ID_main from '../../Pages/IncidentDetails/ID_main'
import Complaint_details from '../../Pages/IncidentDetails/Complaint_details'
import Submit from '../../Pages/IncidentDetails/Submit'
import CheckStatus from '../../Pages/RegisterComplaint/CheckStatus/CheckStatus'
import CW from '../../Pages/RegisterComplaint/ComplaintWithdraw/CW'
import DC from '../../Pages/RegisterComplaint/DraftComplaint/DC'
import UP from '../../Pages/RegisterComplaint/UpdatePhone/UP'
import UserPhone from '../../Pages/RegisterComplaint/UserPhone/UserPhone'
import UserLogin from '../../Pages/LoginRegister/UserLogin'
import UserRegister from '../../Pages/LoginRegister/UserRegister'
import ReportIncident from '../../Pages/Home/ReportIncident/ReportIncident'



const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<UserLogin/>}></Route>
    <Route path='/register' element={<UserRegister/>}></Route>
    <Route path='/userdetails' element={<UserDetails/>}></Route>
    <Route path='/trackcomplaint' element={<TrackComplaint/>}></Route>
    <Route path='/incidentdetails' element={<ID_main/>}></Route>
    <Route path='/suspectdetails' element={<SuspectD/>}></Route>
    <Route path='/complaintdetails' element={<Complaint_details/>}></Route>
    <Route path='/submit' element={<Submit/>}></Route>
    <Route path='/checkstatus' element={<CheckStatus/>}></Route>
    <Route path='/complaintwithdrw' element={<CW/>}></Route>
    <Route path='/draftcomplaint' element={<DC/>}></Route>
    <Route path='/updatephone' element={<UP/>}></Route>
    <Route path='/userd' element={<UserPhone/>}></Route>
    <Route path='/reportincident' element={<ReportIncident/>}></Route>
   </Routes>
  )
}

export default AllRoutes