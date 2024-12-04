import React from 'react'
import '../assets/style/css/home-banner.css'
import Banner2 from '../assets/images/halwa/3.jpg'
import Navbar from '../component/navbar';
import PageBanner from '../component/pagebanner'
import ProductHalwa from '../component/pro-halwa';
import Footer from '../component/footer';
function Products() {
  return (
    <>
    <Navbar/>
    <PageBanner title="Products" subtitle="Home | Products." image={Banner2} />
    <ProductHalwa/>
    <ProductHalwa/>
    <Footer/>
    </>
  )
}

export default Products