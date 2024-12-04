import React from 'react';
import Banner1 from "../assets/images/img/1.png"
import { Link } from "react-router-dom";
import '../assets/style/css/home-banner.css'
function HomeBanner() {
  return (
    <div>
      <section className='home-banner'>
        <div className="banner-cover position-relative overflow-hidden">
            <div className="banner-content">
               <div className="container">
                 <div className="row">
                    <div className="col-md-6" data-aos="fade-down" data-aos-offset="10">
                    <h1 className="text-xl-semibold mb-4">Calicut Halwa – <br /> Where Tradition Meets Taste</h1>
                    <Link to='/products' className="btn-banner text-black mt-3">Order Now</Link>
                    </div>
                 </div>
               </div>
            </div>
            <img className='banner' src={Banner1} alt="" />
        </div>
      </section>
    </div>
  )
}

export default HomeBanner
