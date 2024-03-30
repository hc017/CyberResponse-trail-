import React from 'react';
import './ReportIncident';
import Em from '../../../components/Emergency/Em';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Impersonation = () => {
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
                        <Link to="/cyberbullying" className="ReportButton">
                            <span className="IncidentHeader">CyberBullying</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/impersonation" className="ReportButton">
                            <span className="IncidentHeader">Impersonation</span>
                        </Link>
                    </div>
                    <div className="AlignmentForVictimReport">
                        <Link to="/reportbutton" className="BoxVictimReport">
                            <span className="TextVictimReport">I report</span>
                        </Link>
                        <Link to="/cyberbullying" className="BoxVictimReport">
                            <span className="TextVictimReport">cyber bullying</span>
                        </Link>
                        <Link to="/impersonation" className="BoxVictimReport">
                            <span className="TextVictimReport">and I am getting impersonated</span>
                        </Link>
                    </div>

                </div>
            </div>


            {/* <div className="CSSForSmallerButton">
                <Link to="/cyberstalking" className="SmallerButtonCSS">
                    <span className="SmallerTextButton"> Cyberstalking</span>
                </Link>
                <Link to="/trolling" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Trolling</span>
                </Link>
                <Link to="/harassment" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Harassment</span>
                </Link>
                <Link to="/impersonation" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Impersonating</span>
                </Link> */}
                
            {/* </div> */}




        </div>
    )
}

export default Impersonation;