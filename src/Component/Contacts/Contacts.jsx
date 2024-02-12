import React from 'react'

export default function Contacts() {
  return (
    <div className='container'>
      <div className="text-center pt-5 ">
        
      
            <h4 className='fw-bold myeffect mt-5'>CONATCT SECTION</h4>

        <div className='w-75 mx-auto pt-5 vh-100'>
            <form action="">
                <input type="text" placeholder='userName' className='mb-4 form-control' />
                <input type="number" placeholder='userAge' className='mb-4 form-control' />
                <input type="email" placeholder='userEmail' className='mb-4 form-control' />
                <input type="password" placeholder='password' className='mb-4 form-control' />
                <button className='btn  btn-sm'>send message</button>
            </form>
        </div>

        
      </div>
    </div>
  )
}
