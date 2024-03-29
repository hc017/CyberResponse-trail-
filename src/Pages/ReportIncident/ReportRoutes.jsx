import React from 'react'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom"

import ReportIncident from '../../Pages/ReportIncident/ReportIncident'
import Victim from '../../Pages/ReportIncident/Victim'
import ReportButton from '../../Pages/ReportIncident/ReportButton'
import CyberBullying from '../../Pages/ReportIncident/CyberBullying'
import CyberStalking from '../../Pages/ReportIncident/CyberStalking'
import Trolling from '../../Pages/ReportIncident/Trolling'
import Harassment from './Harassment'
import Impersonation from './Impersonation'
import OnlineFrauds from './OnlineFraud/OnlineFraud'
import FinancialFrauds from './OnlineFraud/FinancialFrauds'
import Technical from './OnlineFraud/TechnicalScam'
import PV from './OnlineFraud/PV'
import ChildExploitation from './ChildCrimes/ChildExploitation'
import Hacking from './Hacking/Hacking'
const ReportRoutes = () => {
  return (
    <Routes>
    <Route path='/reportincident' element={<ReportIncident/>}></Route>
    <Route path='/victim' element={<Victim/>}></Route>
    <Route path='/reportbutton' element={<ReportButton/>}></Route>
    <Route path='/cyberbullying' element={<CyberBullying/>}></Route>
    <Route path='/cyberstalking' element={<CyberStalking/>}></Route>
    <Route path='/trolling' element={<Trolling/>}></Route>
    <Route path='/harassment' element={<Harassment/>}></Route>
    <Route path='/impersonation' element={<Impersonation/>}></Route>
    <Route path='/onlinefrauds' element={<OnlineFrauds/>}></Route>
    <Route path='/financialfrauds' element={<FinancialFrauds/>}></Route>
    <Route path='/technical' element={<Technical/>}></Route>
    <Route path='/pv' element={<PV/>}></Route>
    <Route path='/childexp' element={<ChildExploitation/>}></Route>
    <Route path='/hacking' element={<Hacking/>}></Route>
   </Routes>
  )
}

export default ReportRoutes