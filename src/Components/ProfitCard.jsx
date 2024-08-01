import React from 'react'
import { Colors } from '../Common/Colors'
import { TiArrowSortedUp } from "react-icons/ti";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProfitCard = () => {

    const percentage = 75;

    return (
        <div className='rounded px-3 py-3 h-100' style={{ backgroundColor: Colors.PRIMARY_DARK }}>
            <div className="row">
                <div className="col-7">
                    <small style={{ color: "white" }}>Net Profit</small>
                    <h2 style={{ color: "white" }} >$1234.25</h2>
                    <span style={{ color: "green" }}>
                        <TiArrowSortedUp />
                        3%
                    </span>
                </div>
                <div className="col-5 d-flex flex-column justify-content-center">
                    <div className='d-flex flex-column ' style={{width:"60%",marginLeft:"20%"  }}>
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={{
                                path: {
                                    stroke: `rgba(112, 148, 255, ${percentage / 100})`,
                                    strokeLinecap: 'round',
                                  },
                                trail: {
                                    stroke: '#d6d6d6',
                                    strokeLinecap: 'round',
                                  },
                                  // Customize the text
                                  text: {
                                    fill: '#fff',
                                    fontSize: '21px',
                                    fontWeight:"bold"
                                  },
                            }}
                        />
                         
                    </div>
                    <p className='m-0 text-center' style={{fontSize:"8px", color:"white"}}>*terms and conditions</p>
                   
                </div>
            </div>
        </div>
    )
}

export default ProfitCard