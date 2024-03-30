import React from 'react';
import '../Report/ReportIncident';
// import '../Report/Younger';
import Em from '../../../components/Emergency/Em';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";


const Younger = () => {
    return (
        <div className='YoungerContainer'>
            <Em />
            <div className="YoungerBlock">
                <div className="FinalAlign">
                    <div className="Report-An-Incident-Immediately">Report An Incident Immediately</div>
                    <div className="ReportLine"></div>
                </div>
                <div className="BoxFitYounger">
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
                        <Link to="/18younger" className="ReportButton">
                            <span className="IncidentHeader">I am younger than 18 years</span>
                        </Link>
                    </div>
                    <div className="AlignmentForVictimReport">
                        <Link to="/victim" className="BoxVictimReport">
                            <span className="TextVictimReport">I am a victim</span>
                        </Link>
                        <Link to="/18older" className="BoxVictimReport">
                            <span className="TextVictimReport">I am a younger than 18 years</span>
                        </Link>
                        <br />
                        <br />

                    </div>

                </div>

            </div>
            <div className='TextForYounger'>
                <p className="TitleText">EMERGENCY HELPLINE</p>
                <p className="YoungerText">
                In case of an emergency in India, please dial 112 for immediate assistance. <br/>If you're a victim of violence by a family member or sexual violence, you have several options:<br/>

1. Chat anonymously with a police officer by using available online platforms or helplines.<br/>
2. Seek information and resources on violence prevention and support services through relevant Indian government websites or helplines.<br/>
3. Contact local authorities, NGOs, or helplines specializing in handling cases of violence against women and children.<br/>

                </p>
                
            </div>
            <div className="EndPageButton">
                
            <Link to="/victim" className="PreviousButton">
            <GrLinkPrevious className='ArrowIcon' />
            <div>Previous</div>
            </Link>
            <Link to="/" className="ContinueButton">
            <FaArrowRightLong className='ArrowIcon' />
            <div>Continue</div>
            </Link>
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

export default Younger