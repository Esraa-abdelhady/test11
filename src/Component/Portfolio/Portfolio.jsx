import React from 'react'
import img1 from "../../assets/poert1.png"
import img2 from "../../assets/port2.png"
import img3 from "../../assets/port3.png"

export default function Portfolio() {
  return (
    <div className='container'>
        <div className=" text-center py-5  ">
            <h4 className='fw-bold myeffect mt-4'>PORTFOLIO COMPONENT</h4>

        </div>
      <div className="row gy-2 mb-5 ">
        
      
        <div className="col-md-4 col-sm-6 ">
            <img src={img1} alt="" className='w-100' />
            
        </div>
        <div className="col-md-4 col-sm-6">
            <img src={img2} alt="" className='w-100' />
        </div>
        <div className="col-md-4 col-sm-6">
            <img src={img3} alt="" className='w-100' />
        </div>
        <div className="col-md-4 col-sm-6">
            <img src={img2} alt="" className='w-100' />
        </div>
        <div className="col-md-4 col-sm-6">
            <img src={img3} alt="" className='w-100' />
        </div>
        <div className="col-md-4 col-sm-6">
            <img src={img1} alt="" className='w-100' />
        </div>
      </div>
    </div>
  )
}
