import React from 'react';
import '../assets/style/css/catagory.css';
import Halwa1 from '../assets/images/halwa/1.jpg';
import Halwa2 from '../assets/images/halwa/3.jpg';
import Halwa3 from '../assets/images/halwa/5.jpg';
import Halwa4 from '../assets/images/halwa/7.jpg';
import Halwa5 from '../assets/images/halwa/2.jpg';
import Halwa6 from '../assets/images/halwa/4.jpg';
import Halwa7 from '../assets/images/halwa/6.jpg';
import Halwa8 from '../assets/images/halwa/8.jpg';




const products = [
  { id: 1, name: 'Tender Coconut Halwa',  rate:'100', discount: '20%', image: Halwa1 },
  { id: 2, name: 'Jackfruit Halwa',  rate:'100', discount: '15%', image: Halwa2 },
  { id: 3, name: 'Pista fruit',  rate:'100', discount: '10%', image: Halwa3 },
  { id: 4, name: 'Badham Halwa',  rate:'100', discount: '25%', image: Halwa4 },
  { id: 5, name: 'Orange Halwa',  rate:'100', discount: '5%', image: Halwa5 },
  { id: 6, name: 'Black Halwa',  rate:'100', discount: '25%', image: Halwa6 },
  { id: 7, name: 'Watermelon Halwa',  rate:'100', discount: '13%', image: Halwa7 },
  { id: 8, name: 'Anar Halwa',  rate:'100', discount: '13%', image: Halwa8 },


];

function ProductHalwa() {
  return (
    <section className='pro-halwa-sec overflow-hidden'>
      <div className="container">
        <div className="row">
            <div className="col-12"  data-aos="fade-down" data-aos-offset="10">
                <h5 className='text-uppercase poppins-semibold ms-3 mb-3'>Halwas</h5>
            </div>
          {products.map((product) => (
            <div className="col-md-3 mb-3" data-aos="fade-up" data-aos-offset="10" key={product.id}>
              <div className="halwa-card position-relative">
                <div className="card-top">
                  <span className='fs-12'>{product.discount}</span>
                </div>
                <div className="img-card position-relative overflow-hidden rounded-20">
                  <img className='halwa-img' src={product.image} alt={product.name} />
                </div>
                <div className="cont text-center">
                  <h6 className='mt-3 poppins-semibold'>{product.name}</h6>
                </div>
                <div className="card-bottom text-ceter text-white d-flex align-items-center justify-content-center">
                  <h6 className='poppins-semibold mb-0 me-4'>₹ {product.rate} </h6>
                  <button className='btn mt-1'>Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductHalwa;
