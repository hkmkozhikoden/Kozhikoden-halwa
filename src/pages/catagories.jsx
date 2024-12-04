import React from 'react'
import '../assets/style/css/home-banner.css'
import Banner2 from '../assets/images/img/3.png'
import Navbar from '../component/navbar';
import PageBanner from '../component/pagebanner'
import ProductHalwa from '../component/pro-halwa';
import CatagoryHead from '../component/catagory-head';
import Footer from '../component/footer';
function Catagories() {
  return (
    <>
    <Navbar/>
    <PageBanner title="Products" subtitle="Home | Catagory." image={Banner2} />
    <CatagoryHead/>
    <ProductHalwa/>
    <Footer/>
    </>
  )
}

export default Catagories