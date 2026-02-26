import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="container-fluid">

          <div className="main-nav pt-2">
            <div className="row">
              <div className="col d-flex">
                <div className="icon">
                  <Link to="/" ><img src="https://html.themewant.com/invena/assets/images/logo/08.svg" alt="" /></Link>
                </div>
              </div>
              <div className="col">
                <div className="nav">
                  <ul className='d-flex list-unstyled'>
                    <li><Link className='text-decoration-none text-black' to="/">Home</Link></li>
                    <li><Link className='text-decoration-none  text-black' to="/about">About</Link></li>
                    <li><Link className='text-decoration-none  text-black' to="/service">Service</Link></li>
                    <li><Link className='text-decoration-none  text-black' to="/blog">Blog</Link></li>
                    <li><Link className='text-decoration-none  text-black' to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="d-flex gap-4" >
                  <button className='btn-book border-0 p-3'><Link className='text-decoration-none  text-white' to="/contact"> Book a Meeting</Link></button>
                  <button className='btn-menu border-0 px-3'><a href="./Menubar.jsx"><img src="https://html.themewant.com/invena/assets/images/icons/01.svg" alt="" /></a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header