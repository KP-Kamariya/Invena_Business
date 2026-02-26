import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 ">
              <Link to="/" ><img src="https://html.themewant.com/invena/assets/images/logo/01.svg" alt="" /></Link>
              <p className='py-3' style={{maxWidth:"50%",lineHeight:"28px"}}>Felis consquat magnis fames sagittis ultrices plasodales porttitor quisque ultrice tempor turpis.
              </p>
              <ul className='list-unstyled d-flex gap-4'>
                <li><i className="fa-brands fa-facebook-f"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-linkedin-in"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-skype"></i></li>
              </ul>
            </div>
            <div className="col">
              <h3>Office Information</h3>
              <img src="https://html.themewant.com/invena/assets/images/footer/01.png" alt="" />
              <div className="info d-flex gap-3 pt-3">
                <div className="icon"><Link style={{ color: "#493BFF" }}><i className="fa-solid fa-phone pt-3"></i></Link></div>
                <div className="text">
                  <h>Call Us 24/7</h>
                  <h6>(+256) 2145.2156</h6>
                </div>
              </div>
              <div className="info d-flex gap-3 pt-3">
                <div className="icon"><Link style={{ color: "#493BFF" }}><i className="fa-regular fa-envelope pt-3"></i></Link></div>
                <div className="text">
                  <h>Work With Us</h>
                  <h6>info@finbiz.com</h6>
                </div>
              </div>
              <div className="info d-flex gap-3 pt-3">
                <div className="icon"><Link style={{ color: "#493BFF" }}><i className="fa-solid fa-location-dot pt-3"></i></Link></div>
                <div className="text">
                  <h>Our Location</h>
                  <h6>XYZ Hilton Street,125 <br />Twon United State</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <h3>Our Services</h3>
              <img src="https://html.themewant.com/invena/assets/images/footer/01.png" alt="" />
              <ul className='list-unstyled'>
                <li className='d-flex gap-3 pt-2'><div className="icon"><i className="fa-solid fa-angles-right"></i></div>
                <div className="text">Business Planning</div></li>
                <li className='d-flex gap-3 pt-2'><div className="icon"><i className="fa-solid fa-angles-right"></i></div>
                <div className="text">Tax Strategy</div></li>
                <li className='d-flex gap-3 pt-2'><div className="icon"><i className="fa-solid fa-angles-right"></i></div>
                <div className="text">Financial advices</div></li>
                <li className='d-flex gap-3 pt-2'><div className="icon"><i className="fa-solid fa-angles-right"></i></div>
                <div className="text">Insurance Strategy</div></li>
                <li className='d-flex gap-3 pt-2'><div className="icon"><i className="fa-solid fa-angles-right"></i></div>
                <div className="text">Manage investment</div></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer