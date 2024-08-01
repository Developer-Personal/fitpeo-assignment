import React from 'react'
import { Colors } from '../Common/Colors'
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FaJediOrder, FaMoneyBill } from "react-icons/fa";
import { MdOutlineDeliveryDining, MdCancel } from "react-icons/md";

const icons = [<FaJediOrder/>, <MdOutlineDeliveryDining/>, <MdCancel/>, <FaMoneyBill/>]

const DataCards = ({data, index}) => {
  return (
    <div className='rounded px-2 py-3' style={{backgroundColor:Colors.PRIMARY_DARK}}>
        <span className=' rounded d-flex align-items-center justify-content-center' style={{backgroundColor: data.iconBg, color:data.iconColor, width:"40px", height:"40px"}}>
           {icons[index]}
        </span>
        <p className='text-light py-1'>{data.title}</p>
        <div className='d-flex justify-content-between'>
            <span className='text-light' style={{fontSize:"18px", fontWeight:"bold"}}>{data.number} </span>
            <span style={data.isProfit ? {color: "green"} : {color: "red"}}>
                {data.isProfit ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
                <span>{data.percent}%</span>
            </span>
        </div>
    </div>
  )
}

export default DataCards