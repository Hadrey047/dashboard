import React from 'react';
import peppermint from '../Images/peppermint.jpeg'
import { GoBell } from "react-icons/go";
import '../styles/Profile.css'


const Profile = () => {
    return (
        <div className='profile'>
            <span><GoBell /></span>
            <img src={peppermint} />
        </div>
    );
}

export default Profile;
