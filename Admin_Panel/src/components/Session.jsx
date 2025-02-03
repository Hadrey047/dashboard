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
    {
        location: 'Australia',
        email: 'Chrome - Windows',
        ip_address: '207.173.83.9',
        time: '3 days ago',
        activity_status: 'Active'
    },
    {
        location: 'Australia',
        email: 'Chrome - Windows',
        ip_address: '207.173.83.9',
        time: '3 days ago',
        activity_status: 'Active'
    },
    {
        location: 'Australia',
        email: 'Chrome - Windows',
        ip_address: '207.173.83.9',
        time: '3 days ago',
        activity_status: 'Active'
    },
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
                    <button>Sign Out all sessions</button>
                </div>
            </div>
            <div className='session-header-2'>
                <a href='#' className='item'>
                    Location 
                </a>
                <a href='#' className='item'>
                    Email 
                </a>
                <a href='#' className='item'>
                    IP Address 
                </a>
                <a href='#' className='item'>
                    Time 
                </a>
                <a href='#' className='item'>
                    Activity Status
                </a>
            </div>
            <div className="session-container">
                {sessions.map(session => (
                    <div className='list'>
                        <span>{session.location}</span>
                        <span>{session.email}</span>
                        <span>{session.ip_address}</span>
                        <span>{session.time}</span>
                        <span>{session.activity_status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Session;
