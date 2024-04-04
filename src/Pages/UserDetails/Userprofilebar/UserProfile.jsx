import React from 'react'
import './UserProfile.css'
import { useAuth } from "../../../FirebaseCongfig/AuthContext";

const UserProfile = () => {
    const { currentUser, logout } = useAuth();

    return (
        <div>
            <div className="profile_box">
                <div className="edit_name">
                    <div className="profile_buttons">
                        <div className="profile_tag">
                            <p className='pf_name'>Profile</p>
                            <p className='personal_pf'>Settings for your personal profile</p>
                        </div>

                        <div className="pf_button">
                            <button className='edit-pf'>Edit</button>
                            <button className='save-pf'>Save Changes</button>
                            <button className='cancel-pf'>Cancel</button>
                        </div>
                    </div>
                    <div className="hz_line"></div>

                    <div className="pf_details">
                        <p className='pf_name'>User Name</p>
                        <p className='my_name'>My Name</p>
                    </div>

                    <div className="pf_edit_form">
                        <label className='fullname'>Full Name</label>
                        <input type="text" id='fullname' />

                        <label className='pf_email'>Email ID</label>
                        <input type="text" id='pf_email' />

                        <label className='pf_phone'>Mobile Number</label>
                        <input type="text" id='pf_phone' />

                    </div>
                </div>

                <div className="edit_other">
                    <div className="pf_edit_form">
                        <label className='fullname'>Date Of Birth </label>
                        <input type="text" id='fullname' />

                        <label className='pf_email'>Gender</label>
                        <input type="text" id='pf_email' />

                        <label className='pf_phone'>Father/Mother/Spouse Relationship</label>
                        <input type="text" id='pf_phone' />

                    </div>
                </div>

                <div className="edit_address">
                    <div className="pf_edit_form">
                        <label className='fullname'> Street Name/Colony </label>
                        <input type="text" id='fullname' />

                        <label className='pf_email'>City</label>
                        <input type="text" id='pf_email' />

                        <label className='pf_phone'>State</label>
                        <input type="text" id='pf_phone' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
