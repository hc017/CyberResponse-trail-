import React from 'react';
import '../Report/ReportIncident';
import Em from '../../../components/Emergency/Em';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";


const BankScam= () => {
    return (
        <div className='ReportContainer'>
            <Em />
            <div className="Reporttheblock">
                <div className="FinalAlign">
                    <div className="Report-An-Incident-Immediately">Report An Incident Immediately</div>
                    <div className="ReportLine"></div>
                </div>
                <div className="TextBoxText">
                    <div className="forLinks">
                        <Link to="/" className="Home">
                            <span className="IncidentHeader">HomePage</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/reportincident" className="ReportIncident">
                            <span className="IncidentHeader">ReportIncident</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/victim" className="ReportButton">
                            <span className="IncidentHeader">I am a victim</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/18older" className="ReportButton">
                            <span className="IncidentHeader">I am older than 18 years</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/moneylaundering" className="ReportButton">
                            <span className="IncidentHeader">Financial Frauds</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/bankscam" className="ReportButton">
                            <span className="IncidentHeader">Bank Scam</span>
                        </Link>
                        
                    </div>
                    <div className="AlignmentForVictimReport">
                        <Link to="/victim" className="BoxVictimReport">
                            <span className="TextVictimReport">I am a victim</span>
                        </Link>
                        <Link to="/18older" className="BoxVictimReport">
                            <span className="TextVictimReport">I am a older than 18 years</span>
                        </Link>
                        <Link to="/sh" className="BoxVictimReport">
                            <span className="TextVictimReport">I was scammed financially</span>
                        </Link>
                        <Link to="/bankscam" className="BoxVictimReport">
                            <span className="TextVictimReport">in instances where PIN codes were stolen at ATMs</span>
                        </Link>
                    </div>

                </div>
            </div>


            <div className="EndPageButton">
                
                <Link to="/moneylaundering" className="PreviousButton">
                <GrLinkPrevious className='ArrowIcon' />
                <div>Previous</div>
                </Link>
                <Link to="/incidentdetails" className="ContinueButton">
                <FaArrowRightLong className='ArrowIcon' />
                <div>Continue</div>
                </Link>
                </div>

        </div>
    )
}

export default BankScam