import React from 'react';
import '../styles/Session.css'

const sessions = [
    {
        location: 'Australia',
        email: 'Chrome - Windows',
        ip_address: '207.173.83.9',
        time: '3 days ago',
        activity_status: 'Active'
    },
]

const Session = () => {
    return (
        <div className='session'>
            <div className='session-header-1'>
                <div className='session-header-1-left'>
                    <h3>Session Log</h3>
                </div>
                <div className='session-header-1-right'>
                    <button>Click Here</button>
                </div>
            </div>
            <div className='session-header-2'>
            <a href='#' className='item'>
                    Home 
                </a>
            </div>
        </div>
    );
}

export default Session;
