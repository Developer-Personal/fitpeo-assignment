import React from 'react'
import { Colors } from '../Common/Colors'
import { AppConstants } from '../Common/AppConstants'

const RecentOrders = () => {
  return (
    <div className='rounded px-2 py-3  ms-md-3 mt-4 mt-md-0' style={{backgroundColor:Colors.PRIMARY_DARK}}>
        <h4 className="text-light">Recent Orders</h4>
        <div className='table-responsive'>
        <table className='w-100 table table-sm'>
            <tr>
                <th>Customer</th>
                <th>Order No.</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
            {AppConstants.orders.map((item, index) => (
                <tr key={index}>
                    <td> <span className='d-flex gap-2 table-image'><span className='profile-img-table'></span> {item.name}</span></td>
                    <td>{item.number}</td>
                    <td>{item.amoount}</td>
                    <td><span className='px-2 rounded status' style={item.status === "Delivered" ? {backgroundColor:"green", color:"white"} : {backgroundColor:"red", color:"white"}}>{item.status}</span></td>
                </tr>
            ))}
        </table>
        </div>
       
    </div>
  )
}

export default RecentOrders