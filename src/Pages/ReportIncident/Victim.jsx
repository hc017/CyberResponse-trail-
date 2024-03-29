import React from 'react';
import './ReportIncident';
import Em from '../../components/Emergency/Em';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Victim = () => {
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
                            <span className="IncidentHeader">I am a victim</span>
                        </Link>
                    </div>
                    <div className="AlignmentForVictimReport">
                        <Link to="/reportincident" className="BoxVictimReport">
                            <span className="TextVictimReport">I am a victim</span>
                        </Link>
                    </div>

                </div>
            </div>


            <div className="ButtonCSS">
                <Link to="/victim" className="ButtonReport">
                    <span className="ReportText">I am 18 or younger</span>
                </Link>
                <Link to="/reportbutton" className="ButtonReport">
                    <span className="ReportText">I am older than 18 years</span>
                </Link>
            </div>




        </div>
    )
}

export default Victim
