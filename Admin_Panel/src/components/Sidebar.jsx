import React from 'react';
import {BiHome,} from 'react-icons/bi'
import { IoIosArrowForward } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CgOrganisation } from "react-icons/cg";
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiShippingContainerBold } from "react-icons/pi";
import { HiOutlineTicket } from "react-icons/hi2";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { GrTransaction } from "react-icons/gr";
import { SiMarketo } from "react-icons/si";
import { LuLogs } from "react-icons/lu";
import { TbSettings } from "react-icons/tb";
import '../styles/Sidebar.css'
import peppermint from '../Images/peppermint.jpeg'

const Sidebar = () => {
    return (
        <div className='menu'>
            <div className='logo'>
                <h2>afroshipper</h2>
            </div>
            
            <div className='dash'>
                |<ul>
                    <li>
                        <button className='but'>
                            <span className='icon'><BiHome /></span>Home
                        </button>
                    </li>
                    <li>
                        <button className='but'>
                            <span className='icon'><CiUser /></span>User Management
                            <span className='arrow'><IoIosArrowForward /></span>
                        </button>
                    </li>
                    <li>
                        <button className='but'>
                            <span className='icon'><CgOrganisation /></span>Organization
                        </button>
                    </li>
                    <li>
                        <button className='but'>
                            <span className='icon'><MdOutlineLocalShipping /></span>Vehicles
                        </button>
                    </li>
                    <li>
                        <button className='but'>
                            <span className='icon'><PiShippingContainerBold /></span>Shipments
                            <span className='arrow'><IoIosArrowForward /></span>
                        </button>
                    </li>
                    <li>
                        <button className='but'>
                            <span className='icon'><MdOutlineAccountBalanceWallet /></span>Wallet
                        </button>
                    </li>
                    <li>
                        <button className='but'>
                            <span className='icon'><GrTransaction /></span>Transactions
                        </button>
                    </li>
                    <li>
                        <button className='but'>
                            <span className='icon'><BiHome /></span>Shipping Quote
                        </button>
                    </li>
                    <li>
                        <button className='but'>
                            <span className='icon'><HiOutlineTicket /></span>Support Tickets
                        </button>
                    </li>
                    <li>
                        <button className='but'>
                            <span className='icon'><LiaFileInvoiceSolid /></span>Invoices
                            <span className='arrow'><IoIosArrowForward /></span>
                        </button>
                    </li>
                    <li>
                        <button className='but'>
                            <span className='icon'><SiMarketo /></span>Marketplace 
                        </button>
                    </li>
                    <li>
                        <button className='but'>
                            <span className='icon'><LuLogs /></span>Log
                        </button>
                    </li>
                    <li>
                        <button className='but'>
                            <span className='icon'><TbSettings /></span>Settings
                            <span className='arrow'><IoIosArrowForward /></span>
                        </button>
                    </li>
                </ul>  
            </div>
                <div className='side-pic'>
                    <img src={peppermint} />
                    <span>
                        <ul>
                            <li><b>Abdullah Nasir</b></li>
                            <li>abdullah@gmail.com</li>
                        </ul>
                    </span>
                    <span className='arrow'><IoIosArrowForward /></span>
                    
                </div>
            </div>
    );
}

export default Sidebar;
