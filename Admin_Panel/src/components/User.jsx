import React from 'react';
import peppermint from '../Images/peppermint.jpeg'
import '../styles/User.css'

const User = () => {
    return (
        <div className='user-profile'>
            <div className='user-pic'>
                <img src={peppermint} />
            <div className='user-name'>
                <h3>Abdullah Nasir</h3></div>
            </div>
        </div>
    );
}

export default User;
