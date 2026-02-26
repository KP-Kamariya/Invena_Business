import React from 'react'
import Header from '../Reusefiles/Header'
import Footer from '../Reusefiles/Footer'

const Blog = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="container-fluid">
          <div className='heading text-center'>
            <h5 className='pb-3'>BLOG & NEWS</h5><h2 className='pb-5 fw-bold'>Recent blog post</h2>
          </div>
          <div className="content d-flex">
            <div className="con1 me-3">
              <p className=''>Business Solution <span> /by David Dolean</span></p>
              <h3 className='pb-4'>The quick settle tips of the new ages exist</h3> <hr className='pb-4'/>
              <img src="https://html.themewant.com/invena/assets/images/service/15.webp" alt="" className='img-fluid'/>
            </div>
            <div className="con1 me-3">
              <p>Business Solution <span> /by David Dolean</span></p>
              <h3 className='pb-4'>Building a Brand That from Market Leaders</h3> <hr className='pb-4'  />
              <img src="https://html.themewant.com/invena/assets/images/service/14.webp" alt=""  className='img-fluid' />

            </div>
            <div className="con1">
              <p>Business Solution <span> /by David Dolean</span></p>
              <h3 className='pb-4'>Transforming Your Best Of Approach to Business</h3> <hr className='pb-4'/>
              <img src="https://html.themewant.com/invena/assets/images/service/16.webp" alt=""  className='img-fluid' />

            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Blog