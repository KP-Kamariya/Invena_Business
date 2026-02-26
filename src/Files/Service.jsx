import React from 'react'
import Header from '../Reusefiles/Header'
import Footer from '../Reusefiles/Footer'
import Button from 'react-bootstrap/Button';
import { cards } from './cards';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <>
      <Header></Header>
      <div className="main bg-light">
        <div className="container">
          <div className='pt-5'>
            <button className='rounded-3 p-2'>Our Service</button>
            <h1 className='pt-5'>Comprehensive HR Solutions <br />
              for Every Stage of Growth</h1>
          </div>
          <div className="row">
            {
              cards.map((v, i) => {
                return (
                  <>
                    <div className="col py-5">
                      <div className="card" style={{ width: "22rem" }}>
                        <div className='bg-white p-3 rounded-5'>
                          <img src={v.images} className="card-img-top" alt="..." />

                          <div className="card-body">
                            <h3 className="card-title text-center">{v.title}</h3>
                            <p className="card-text">{v.description}</p>
                            <Link to={`/service/${v.id}`} className="btn btn-primary rounded-5">Read More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default Service