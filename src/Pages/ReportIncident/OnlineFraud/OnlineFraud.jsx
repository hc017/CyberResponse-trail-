import React from 'react';
import '../ReportIncident.css';
import Em from '../../../components/Emergency/Em';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";

const OnlineFrauds = () => {
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
                        <Link to="/reportbutton" className="ReportButton">
                            <span className="IncidentHeader">Report</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/onlinefrauds" className="ReportButton">
                            <span className="IncidentHeader">Online Frauds</span>
                        </Link>
                    </div>
                    <div className="AlignmentForVictimReport">
                        <Link to="/reportbutton" className="BoxVictimReport">
                            <span className="TextVictimReport">I report</span>
                        </Link>
                        <Link to="/onlinefrauds" className="BoxVictimReport">
                            <span className="TextVictimReport">online fraud against</span>
                        </Link>
                    </div>

                </div>
                <div className="NormalPagePrev">
                <Link to="/reportbutton" className="PreviousButton">
                <GrLinkPrevious className='ArrowIcon' />
                <div>Previous</div>
                </Link>
                </div>
            </div>


            <div className="CSSForSmallerButton">
                <Link to="/financialfrauds" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Financial Frauds</span>
                </Link>
                
                <Link to="/technical" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Tech Support Scams</span>
                </Link>
                <Link to="/pv" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Privacy Violations</span>
                </Link>
                
            </div>

        </div>
    )
}

export default OnlineFrauds