import { useState } from 'react'
import Navbar from './Components/Navbar'
import SideNav from './Components/SideNav'
import { Colors } from './Common/Colors'
import DataCards from './Components/DataCards'
import { AppConstants } from './Common/AppConstants'
import ProfitCard from './Components/ProfitCard'
import ChartData from './Components/ChartData'
import { MdOutlineDeliveryDining, MdCancel } from "react-icons/md";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import RecentOrders from './Components/RecentOrders'
import Reviews from './Components/Reviews'

function App() {



  return (
    <div className='wrapper'>
      <Navbar />
      <main>
        <SideNav />
        <div className='bg-dark p-3' style={{ marginTop: "70px", marginLeft: "60px" }}>
          <h1 className='text-light mb-3 mt-2'>Dashboard</h1>
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="row">
                {
                  AppConstants.cardData.map((item, index) => <div key={index} className="col-md-3 col-6 p-2">
                    <DataCards data={item} index={index} />
                  </div>)
                }

              </div>
            </div>
            <div className="col-md-4 col-12 ps-4 ">
              <div className="row h-100">
                <div className="col-12 p-2">
                  <ProfitCard />
                </div>
              </div>

            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-8 col-12">
              <ChartData />
            </div>
            <div className="col-md-4 col-12 ps-4">
              <div className="rounded p-3 h-100 d-flex flex-column justify-content-around" style={{ backgroundColor: Colors.PRIMARY_DARK }}>
                {
                  AppConstants.secondData.map((item, index) => <div key={index} className='d-flex w-100 my-2 gap-2 align-items-center'>
                    <span className='d-flex align-items-center justify-content-center' style={{ color: item.iconColor, backgroundColor: item.iconBg, borderRadius: "50%", width: "40px", height: "40px" }}><MdOutlineDeliveryDining /></span>
                    <p className='text-light mb-0'>{item.title}</p>
                    <span style={{ flexGrow: "1", textAlign: "right", color: "white" }}><IoMdArrowDroprightCircle /></span>
                  </div>)
                }
              </div>

            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-8 col-12">
              <RecentOrders />
            </div>
            <div className="col-md-4 col-12 ps-4">
              <div className="row">
                <div className="col-12 ">
                  <Reviews />
                </div>
              </div>

            </div>
          </div>
        </div>



      </main>
    </div>
  )
}

export default App
