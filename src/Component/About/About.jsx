import React from 'react'
import img from "../../assets/avataaars.svg"

export default function About() {

  return <>
    <div className="bgcolor">
    <div className='container '>
        <div className="row text-white AboutPage mx-auto py-5">
        <div className=" text-center py-3">
            <img src={img}  className="w-25" alt="" />
        </div>
        <div className="col-12 text-center  ">
            <h2 className='fw-bold myeffect'>ABOUT COMPONENT</h2>

        </div>
        <div className="col-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>

        </div>
       
      
    </div>
    </div>
    </>
}
