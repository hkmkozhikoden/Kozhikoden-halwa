import React from 'react'
import Navbar from '../component/navbar'
import HomeBanner from '../component/home-banner'
import CatagoryHead from '../component/catagory-head'
import ProductHalwa from '../component/pro-halwa'
import Footer from '../component/footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <HomeBanner/>
        <CatagoryHead/>
        <ProductHalwa/>
        <Footer/>
    </div>
  )
}

export default Home