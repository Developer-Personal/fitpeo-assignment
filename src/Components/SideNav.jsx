import React from 'react'
import { FaSearch, FaHome,FaChartBar,FaRegStickyNote, FaWallet, FaCarBattery } from "react-icons/fa";
import { CiMail, CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline, IoMdLogOut } from "react-icons/io";
import { Colors } from '../Common/Colors';

function SideNav() {
  return (
    <div className='side-nav py-4' style={{backgroundColor:Colors.PRIMARY_DARK}}>
            <div className='d-flex flex-column justify-content-between' style={{height:"90%"}}>
            <ul className='d-flex flex-column gap-3 align-items-center p-0' style={{listStyleType:"none", width:"100%"}}>
                <li style={{color:Colors.PRIMARY_COLOR, borderLeft:`4px solid ${Colors.PRIMARY_COLOR}`}}><FaHome/></li>
                <li><FaChartBar/></li>
                <li><FaRegStickyNote/></li>
                <li><FaWallet/></li>
                <li><FaCarBattery/></li>
            </ul>
            <span className='logout' style={{color:"white"}}><IoMdLogOut/></span>
            </div>
           
        </div>
  )
}

export default SideNav