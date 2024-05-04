import React from 'react'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom"

import ReportIncident from './Report/ReportIncident'
import Victim from './Victim/Victim'
import ReportButton from './Report/ReportButton'
import CyberBullying from './Report/CyberBullying'
import CyberStalking from './Report/CyberStalking'
import Trolling from './Report/Trolling'
import Harassment from './Report/Harassment'
import Impersonation from './Report/Impersonation'
import OnlineFrauds from './OnlineFraud/OnlineFraud'
import FinancialFrauds from './OnlineFraud/FinancialFrauds'
import Technical from './OnlineFraud/TechnicalScam'
import PV from './OnlineFraud/PV'
import ChildExploitation from './ChildCrimes/ChildExploitation'
import Hacking from './Hacking/Hacking'
import Older from './Victim/18older'
import SexualHarassment from './Victim/SexualHarassment'
import MoneyLaudering from './Victim/MoneyLaundering'
import CyTerror from './Victim/CyTerror'
import Ransomware from './Victim/Ransomware'
import Cyflash from './Victim/CyFlash'
import Blackmail from './Victim/Blackmail'
import WrongMessages from './Victim/CommentsM'
import UPI from './Victim/UPIScam'
import BankScam from './Victim/BankScam'
import WebScam from './Victim/WebScam'
import Younger from './Victim/18younger'
import NonFinancial from './Victim/NonFinancial'
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
    <Route path='/18older' element={<Older/>}></Route>
    <Route path='/sh' element={<SexualHarassment/>}></Route>
    <Route path='/moneylaundering' element={<MoneyLaudering/>}></Route>
    <Route path='/cyterror' element={<CyTerror/>}></Route>
    <Route path='/ransomware' element={<Ransomware/>}></Route>
    <Route path='/cyflash' element={<Cyflash/>}></Route>
    <Route path='/blackmailing' element={<Blackmail/>}></Route>
    <Route path='/wrongmessages' element={<WrongMessages/>}></Route>
    <Route path='/upi' element={<UPI/>}></Route>
    <Route path='/bankscam' element={<BankScam/>}></Route>
    <Route path='/webscam' element={<WebScam/>}></Route>
    <Route path='/18younger' element={<Younger/>}></Route>
    <Route path='/nonfinancial' element={<NonFinancial/>}></Route>

   </Routes>
  )
}

export default ReportRoutes