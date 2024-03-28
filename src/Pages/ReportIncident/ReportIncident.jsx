import React from 'react';
import './ReportIncident.css';
import Em from "../../components/Emergency/Em";
import { Link } from 'react-router-dom';

const ReportIncident = () => {
    return (
        <div className='ReportContainer'>
            <Em />
            <div className="IncidentBlock">
                <div className="ToAlign">
                    <div className="Report-An-Incident-Immediately">
                        Report An Incident Immediately
                    </div>
                    <div className="ReportLine"></div>
                </div>
                <div className="ButtonCSS">
                    <Link to="/reportincident" className="ReportButton">
            
                        <span className="ReportText">I am a victim</span>
                    </Link>
                    <Link to="/reportincident" className="ReportButton">
                        <span className="ReportText">Report</span>
                    </Link>
                </div>
                <div className="Endline"></div>
            </div>
        </div>
    );
}

export default ReportIncident;
