import React from 'react';
import '../Report/ReportIncident';
import Em from '../../../components/Emergency/Em';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Ransomware = () => {
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
                        <Link to="/ransonware" className="ReportButton">
                            <span className="IncidentHeader">Ransomware</span>
                        </Link>
                    </div>
                    <div className="AlignmentForVictimReport">
                        <Link to="/victim" className="BoxVictimReport">
                            <span className="TextVictimReport">I am a victim</span>
                        </Link>
                        <Link to="/18older" className="BoxVictimReport">
                            <span className="TextVictimReport">I am a older than 18 years</span>
                        </Link>
                        <Link to="/ransonware" className="BoxVictimReport">
                            <span className="TextVictimReport">Ransomware- blackmailing for payment online by hackers</span>
                        </Link>
                    </div>

                </div>
            </div>


            {/* <div className="CSSForSmallerButton">
                <Link to="/sh" className="SmallerButtonCSS">
                    <span className="SmallerTextButton"> Sexual Harassment</span>
                </Link>
                <Link to="/moneylaundering" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Financial Fraud</span>
                </Link>
                <Link to="/cyterror" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Cyber Terrorism</span>
                </Link>
                <Link to="/ransomware" className="SmallerButtonCSS">
                    <span className="SmallerTextButton">Ransomware</span>
                </Link> 
                
             </div> */}

        </div>
    )
}

export default Ransomware