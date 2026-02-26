import React from 'react'
import Header from '../Reusefiles/Header'
import Footer from '../Reusefiles/Footer'
import { Link, useLocation } from 'react-router-dom'
import { cards } from './cards'

const Cardsdetails = () => {

    let location = useLocation()
    let currentid = location.pathname.split('/')[2]
    let currentdata = cards.filter((v) => v.id == currentid)[0]


    return (
        <>
            <Header></Header>
            <div className="container pb-5">
                <h1 className=' text-center py-5'>Our Services</h1>

                <img src={currentdata.images} width={"400px"} alt="" />
                <h1>{currentdata.title}</h1>
                <Link to='/service' className="btn btn-primary rounded-5 px-5">Back</Link>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Cardsdetails