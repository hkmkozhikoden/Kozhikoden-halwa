import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../assets/style/css/testimonial.css';
import User1 from '../assets/images/halwa/user.webp';

function Testimonial() {
    const testimonials = [
        {
            id: 1,
            head:"Premium quality",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime labore culpa deserunt, fugit itaque debitis eum, illo accusantium ut tenetur ab dicta omnis laborum, eveniet distinctio pariatur in commodi nostrum!",
            name: "Lorem Ipsum",
            image: User1,
        },
        {
            id: 2,
            head:"Great Quality",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime labore culpa deserunt, fugit itaque debitis eum, illo accusantium ut tenetur ab dicta omnis laborum, eveniet distinctio pariatur in commodi nostrum!.",
            name: "John Doe",
            image: User1,
        },
        {
            id: 3,
            head:"Superb quality",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime labore culpa deserunt, fugit itaque debitis eum, illo accusantium ut tenetur ab dicta omnis laborum, eveniet distinctio pariatur in commodi nostrum!.",
            name: "Jane Smith",
            image: User1,
        },
        {
            id: 4,
            head:"Top-notch",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime labore culpa deserunt, fugit itaque debitis eum, illo accusantium ut tenetur ab dicta omnis laborum, eveniet distinctio pariatur in commodi nostrum!.",
            name: "Mark Brown",
            image: User1,
        },
    ];
    const settings = {
        dots: false,
        infinite: true,
        arrow:true,
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <section className='testimonial-sec'>
            <div className="container">
              <div className="row">
                <div className="col-12 ms-lg-3 mb-3">
                    <h4 className='poppins-semibold'>Testimonials</h4>
                </div>
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div className='mt-4' key={testimonial.id}>
                            <div className="card bg-transparent">
                                <h5 className='poppins-semibold'>{testimonial.head}</h5>
                                <p>{testimonial.text}</p>
                                <div className="card-bottom d-flex align-items-center">
                                    <img className='user-img' src={testimonial.image} alt={testimonial.name} />
                                    <h6 className='ms-3 mb-0 poppins-semibold'>{testimonial.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
              </div>
            </div>
        </section>
    );
}

export default Testimonial;
