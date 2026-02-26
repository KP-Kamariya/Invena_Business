import React from 'react'
import Header from '../Reusefiles/Header'
import Footer from '../Reusefiles/Footer'
import "./About.css"


const About = () => {
  return (
    <>
      <Header></Header>

      <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className='content-img'>
              <img src="https://html.themewant.com/invena/assets/images/about/04.webp" alt="" className='img-fluid' />
              <div className="small-img">
                <img src="https://html.themewant.com/invena/assets/images/about/05.webp" alt=""  className='img-fluid' />
              </div>
              <div className='counter-area'>
                  <h1 className='text-white'>25+</h1>
                  <p className='text-white'>Year of experience</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="content-info">
              <h1 className='pt-5'>Empowering You to Feel
                Your Best Every Day</h1>

              <p className='pt-5'>Porttitor ornare fermentum aliquam pharetra ut facilisis gravida risus suscipit. dui feugiat fusce conubia ridiculus tristique parturient natoque vulputate risu.</p>

              <ul className='list-unstyled pt-4'>
                <li><i class="fa-solid fa-circle-check"></i>24/7 Call Services Avilable</li>
                <li><i class="fa-solid fa-circle-check pt-3"></i>Great Skilled Consultant</li>
                <li><i class="fa-solid fa-circle-check pt-3"></i>Expert Team Members</li>
              </ul>
              <div className='d-flex'>
                <div className="icon-call"><i class="fa-solid fa-phone-volume"></i></div>
                <div className="text"><p>Call us anytime</p><h4>+256 56778.5678</h4></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default About