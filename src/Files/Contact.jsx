import React from 'react'
import Header from '../Reusefiles/Header'
import Footer from '../Reusefiles/Footer'
import "./Contact.css"
const Contact = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
          <div className="col-7">
            <div className='bg-light p-5 shadow'>
                <div>
                  <span>MAKE AN APPOINTMENT</span><h2>Request a free quote</h2>
                </div>
                <div>
                  <form action="#">
                    <div className='d-flex my-4 justify-content-between'>
                      <div><input type="text" placeholder='Your Name' className='rounded-1 text-left p-2' /></div>
                      <div><input type="text" placeholder='Your mobile Number' className='rounded-1 text-left p-2' /></div>
                    </div>
                    <div><input type="text" placeholder='Your email ' className='rounded-1 text-left p-2 w-100 me-3' /> </div>
                    <div><textarea name="" placeholder='Type Your Message' id="" className='p-5 w-100 mt-4 text-center mb-2'></textarea></div>
                    <button className='btn1 px-4 py-3 rounded-5 border-0'> Submit Message</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-5" style={{marginLeft:"-60px", marginTop:"45px"}}>
              <img src="https://html.themewant.com/invena/assets/images/appoinment/01.webp" alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Contact