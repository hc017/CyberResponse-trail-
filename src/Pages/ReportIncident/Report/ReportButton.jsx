import React from 'react';
import './ReportIncident';
import Em from '../../../components/Emergency/Em';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";
import { getDatabase, ref, push,remove  } from "firebase/database";

const ReportButton = () => {
    const db = getDatabase();

    const handleClick = (category) => {
        const reportsRef = ref(db, 'victim/maincategory/');

        // Clear existing data in the temporary_reports node
        remove(reportsRef)
            .then(() => {
                // Add the new category to the database
                push(reportsRef, category)
                    
                    .catch((error) => {
                        console.error("Error writing to database:", error.message);
                        alert("Error in adding report");
                    });
            })
            .catch((error) => {
                console.error("Error removing data from database:", error.message);
                alert("Error in removing existing report data");
            });
    };


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
                        <Link to="/reportbutton" className="BoxVictimReport" onClick={() => handleClick("I report")}>
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
                <Link to="/cyberbullying" className="SmallerButtonCSS" onClick={() => handleClick("Cyber Bullying")}>
                    <span className="TextVictimReport">Cyber Bullying</span>
                </Link>
                <Link to="/onlinefrauds" className="SmallerButtonCSS" onClick={() => handleClick("Online Fraud")}>
                    <span className="TextVictimReport">Online Fraud</span>
                </Link>
                <Link to="/childexp" className="SmallerButtonCSS" onClick={() => handleClick("Child Exploitation")}>
                    <span className="TextVictimReport">Child Exploitation</span>
                </Link>
                <Link to="/hacking" className="SmallerButtonCSS" onClick={() => handleClick("Hacking")}>
                    <span className="TextVictimReport">Hacking</span>
                </Link>
            </div>
        </div>
    )
}

export default ReportButton;