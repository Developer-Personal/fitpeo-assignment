import React from 'react'
import { Colors } from '../Common/Colors'
import { AppConstants } from '../Common/AppConstants'
import { FaStar } from "react-icons/fa";

const Reviews = () => {

    const stars = Array(5).fill(false);

    return (
        <div className='rounded px-3 py-md-3  reviewOuter ms-md-3 mt-4 mt-md-0' style={{ backgroundColor: Colors.PRIMARY_DARK ,overflowY:"auto", height:"465px"}}>
            <h4 className="text-light mb-4">Customer's Feedback</h4>
            {
                AppConstants.reviews.map((item, index) => (
                    <div key={index} className='mb-3 text-white review'>
                        <span className='d-flex gap-2'><span className='profile-img-table'></span> {item.name}</span>
                        <div>
                            {stars.map((_, ind) => (
                                <span key={ind} style={item.star-1 >= ind ? {color:"yellow"} : {}}><FaStar/></span>
                            ))}
                        </div>
                        <p style={{fontSize:"11px"}}>{item.desc}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Reviews