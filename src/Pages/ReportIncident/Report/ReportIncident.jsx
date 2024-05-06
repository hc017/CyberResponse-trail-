import React from 'react';
import '../ReportIncident.css';
import Em from "../../../components/Emergency/Em";
import { Link } from 'react-router-dom';

const ReportIncident = () => {
    return (
        <div className='ReportContainer'>
            <Em />
            <div className="BlockForReport1">
                <div className="AlignToUseAll">
                    <div className="Report-An-Incident-Immediately">Report An Incident Immediately</div>
                    <div className="ReportLine"></div>
                </div>
                <div className="ButtonCSS">
                    <Link to="/victim" className="ButtonReport">
                        <span className="ReportText">I am a victim</span>
                    </Link>
                    <Link to="/reportbutton" className="ButtonReport">
                        <span className="ReportText">I report</span>
                    </Link>
                </div>
                <div className="Endline"></div>
            </div>
        </div>

    );
}

export default ReportIncident;
