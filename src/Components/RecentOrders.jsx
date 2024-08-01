import React from 'react'
import { Colors } from '../Common/Colors'
import { AppConstants } from '../Common/AppConstants'

const RecentOrders = () => {
  return (
    <div className='rounded px-2 py-3 h-100' style={{backgroundColor:Colors.PRIMARY_DARK}}>
        <h4 className="text-light">Recent Orders</h4>
        <table className='w-100'>
            <tr>
                <th>Customer</th>
                <th>Order No.</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
            {AppConstants.orders.map((item, index) => (
                <tr key={index}>
                    <td> <span className='d-flex gap-2'><span className='profile-img-table'></span> {item.name}</span></td>
                    <td>{item.number}</td>
                    <td>{item.amoount}</td>
                    <td><span className='px-2 rounded' style={item.status === "Delivered" ? {backgroundColor:"green", color:"white"} : {backgroundColor:"red", color:"white"}}>{item.status}</span></td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default RecentOrders