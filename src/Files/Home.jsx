import React from 'react'
import Header from '../Reusefiles/Header'
import Footer from '../Reusefiles/Footer'
import './Home.css'

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="bgimg">
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="containt text-white">
                  <span className='pre-title'>
                    <img src="https://html.themewant.com/invena/assets/images/banner/icon/03.svg" alt="" />
                    Business Success Starts Here
                  </span>
                  <h1>HR Soulation</h1>
                  <p>Porttitor ornare fertum aliquam pharetra facilisis gravida risus suscipit Dui feugiat fusce conubia ridiculus tristique parturient</p>
                  <button>Get In Touch</button></div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      <Footer></Footer>
    </>
  )
}

export default Home