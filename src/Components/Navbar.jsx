import React from 'react'
import { BsMenuUp } from "react-icons/bs";
import { FaSearch, FaHome,FaChartBar,FaRegStickyNote, FaWallet, FaCarBattery } from "react-icons/fa";
import { CiMail, CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline, IoMdLogOut } from "react-icons/io";
import { Colors } from '../Common/Colors';

function Navbar() {
    return (
        <>
        <nav className='px-2 py-3 shadow' style={{ backgroundColor: Colors.PRIMARY_DARK }}>
            <div className="row align-items-center m-0">
                <div className="col-sm-1 col-2 ">
                    <span className='d-flex align-items-center' style={{ color: Colors.PRIMARY_COLOR, fontSize:"28px" }}><BsMenuUp /></span>
                </div>
                <div className="col-sm-7 col-md-8 col-10">
                    <div className='search-bar'>
                        <span className='text-light me-2'><FaSearch /></span>
                        <input type="text" placeholder='Search' />
                    </div>

                </div>
                <div className="col-sm-4 col-md-3 d-none d-sm-flex justify-content-around align-items-center">
                    <div className="nav-links d-flex gap-2">
                        <span><CiMail /></span>
                        <span><CiSettings /></span>
                        <span className='badge-span'>
                            <span className='position-relative d-flex'>
                            <IoIosNotificationsOutline />
                            <span class="position-absolute translate-middle p-1 border border-light rounded-circle" style={{backgroundColor:Colors.PRIMARY_COLOR, left:"70%", top:"4px"}}>
                                <span class="visually-hidden">New alerts</span>
                            </span>
                            </span>
                            
                        </span>
                    </div>
                    <span className='profile-img'></span>
                </div>
            </div>
        </nav>
        
        </>
    )
}

export default Navbar