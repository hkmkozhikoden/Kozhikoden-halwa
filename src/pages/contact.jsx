import React from 'react'
import '../assets/style/css/home-banner.css'
import Banner2 from '../assets/images/halwa/8.jpg'
import Navbar from '../component/navbar';
import PageBanner from '../component/pagebanner'
import Footer from '../component/footer';
import ContactForm from '../component/contact-form';
function Contact() {
  return (
    <>
    <Navbar/>
    <PageBanner title="Contact" subtitle="Home | Contact." image={Banner2} />
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact