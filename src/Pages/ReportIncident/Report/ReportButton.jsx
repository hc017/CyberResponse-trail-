import React from 'react';
import './ReportIncident';
import Em from '../../../components/Emergency/Em';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";

const ReportButton = () => {
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
                    </div>
                    <div className="AlignmentForVictimReport">
                        <Link to="/reportbutton" className="BoxVictimReport">
                            <span className="TextVictimReport">I report</span>
                        </Link>
                    </div>

                </div>
                <div className="NormalPagePrev">
                <Link to="/reportincident" className="PreviousButton">
                <GrLinkPrevious className='ArrowIcon' />
                <div>Previous</div>
                </Link>
                </div>
            </div>


            <div className="CSSForSmallerButton">
                <Link to="/cyberbullying" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Cyber Bullying</span>
                </Link>
                
                <Link to="/onlinefrauds" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Online Fraud</span>
                </Link>
                <Link to="/childexp" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Child Exploitation</span>
                </Link>
                <Link to="/hacking" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Hacking</span>
                </Link>
            </div>




        </div>
    )
}

export default ReportButton