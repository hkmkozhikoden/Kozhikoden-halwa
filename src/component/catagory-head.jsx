import React from 'react';
import '../assets/style/css/catagory.css';
import Catagory1 from '../assets/images/img/21.png';
import Catagory2 from '../assets/images/img/81.png';
import Catagory3 from '../assets/images/img/91.png';
import Catagory4 from '../assets/images/img/71.png';

const categories = [
  { id: 1, name: 'Fruit', image: Catagory1 },
  { id: 2, name: 'Vegetables', image: Catagory2 },
  { id: 3, name: 'Dairy', image: Catagory3 },
  { id: 4, name: 'Meat', image: Catagory4 },
];

function CatagoryHead() {
  return (
    <section className='catagory-head-sec'>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <h4 className='text-uppercase poppins-semibold'>Catagories</h4>
            </div>
          {categories.map((category) => (
            <div className="col-md-3" key={category.id}>
              <div className="sm-card">
                <img className='cata-img' src={category.image} alt={category.name} />
                <h6 className='mt-3 poppins-semibold'>{category.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CatagoryHead;
