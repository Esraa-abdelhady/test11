import React from 'react'

export default function Footer() {
    return <>

      <div className="footer">
      <div className="container">
       <div className="row text-center myfoot  text-white">
            <div className="col-4">
                <div className="">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>

                </div>
            </div>
            <div className="col-4">
                <div className="">
                    <h3>AROUND THE WEB</h3>
                    <div className="myicons pt-3 ">

                    <i className='fa-brands fa-facebook px-2'></i>
                    <i className='fa-brands fa-twitter px-2'></i>
                    <i className='fa-brands fa-instagram px-2'></i>
                    <i className='fa-brands fa-linkedin px-2'></i>
                    </div>

                </div>
            </div>
            <div className="col-4">
                <div className="">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    

                </div>
            </div>
        </div>
        
       </div>
       <div className='w-100   copy-foot'>
            <p>Copyright © Your Website 2021</p>
        </div>
      </div>
       



    </>
}
