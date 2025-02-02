import React from 'react';
import {BiBookAlt, BiBuilding, BiCar, BiHelpCircle, BiHome, BiLogIn, BiLogInCircle, BiMoney, BiShield, BiSupport, BiUser} from 'react-icons/bi'
import '../styles/Sidebar.css'

const Sidebar = () => {
    return (
        <div className='menu'>
            <div className='logo'>
                <h2>afroshipper</h2>
            </div>

            <div className='menu--list'>
                <a href='#' className='item'>
                    <BiHome className='icon' />
                    Home 
                </a>
                <a href='#' className='item'>
                    <BiUser className='icon'/>
                    User Management
                </a>
                <a href='#' className='item'>
                    <BiBuilding className='icon'/>
                    Organization 
                </a>
                <a href='#' className='item'>
                    <BiCar className='icon'/>
                    Vehicles
                </a>
                <a href='#' className='item'>
                    <BiShield className='icon'/>
                    Shipments 
                </a>
            </div>

            <div className='menu--list'>
                <a href='#' className='item'>
                    <BiSupport className='icon'/>
                    Support Ticket
                </a>
                <a href='#' className='item'>
                    <BiMoney className='icon'/>
                    Marketplace
                </a>
                <a href='#' className='item'>
                    <BiLogInCircle className='icon'/>
                    Log 
                </a>
                <a href='#' className='item'>
                    <BiHelpCircle className='icon'/>
                    Settings
                </a>
            </div>

        </div>
    );
}

export default Sidebar;
