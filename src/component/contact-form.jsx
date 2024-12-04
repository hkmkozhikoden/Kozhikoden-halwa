import React from 'react'
import '../assets/style/css/contact-form.css'
function ContactForm() {
  return (
    <section className='contact-form-sec'>
        <div className="container">
            <div className="row">
                <div className="col-md-7 mb-3 mb-md-0">
                    <div className="contact-info">
                        <div className="row">
                            <div className="col-12">
                                <h4 className='font-medium mb-3'>Have a Creative Challenge? Let’s Solve It Together!</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur necessitatibus reprehenderit impedit inventore vero doloremque architecto debitis facilis sunt quod?</p>
                            </div>
                            <div className="col-12">
                                <h5 className='my-2'>Corporate Address</h5>
                                <a href=''>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing <br /> elit. Suscipit consectetur eveniet inventore sunt <br /> cupiditate dicta <br /> esse ullam repudiandae voluptate! Voluptatibus.</a>
                            </div>
                            <div className="col-12">
                                <h5 className='my-2'>Mail Us</h5>
                               <a href="mailto:nisamudheenkp91@gmail.com">nisamudheenkp91@gmail.com</a> <br />
                               <a href="mailto:nisamudheenkp91@gmail.com">nisamudheenkp91@gmail.com</a>
                            </div>
                            <div className="col-12">
                                <h5 className='my-2'>Telephone</h5>
                               <a href="tel:+91 86060 65001">+91 86060 65001</a> <br />
                               <a href="tel:+91 86060 65001">+91 86060 65001</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 mb-3 mb-md-0">
                 <div className="contact-form">
                  <form action="">
                    <div className="row text-start">
                      <div className="col-12">
                        <h5 className='font-bold'>Get In Touch</h5>
                        <p className='fs-16 mb-2'>How can i help you ?</p>
                      </div>
                      <div className="col-12 mb-3">
                          <input className='form-control mt-2' type="text" id='Name' name='Name' placeholder='Enter your name' />
                      </div>
                      <div className="col-12 mb-3">
                          <input className='form-control mt-2' type="number" id='FirstName' name='FirstName' placeholder='Enter phone number' />
                      </div>
                      <div className="col-12 mb-3">
                          <input className='form-control mt-2' type="gmail" id='gmail' name='gmail' placeholder='Enter your gmail' />
                      </div>
                      <div className="col-12 mb-3">
                          <textarea className='form-control' placeholder='Enter  your note ...' name="" id=""></textarea>
                      </div>
                      <div className="col-12 mt-3">
                        <button className='btn btn-submit'> Send</button>
                      </div>
                    </div>
                  </form>
                 </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm
