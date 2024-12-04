import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaWhatsapp } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import '../assets/style/css/navbar.css';
import Logo from '../assets/images/logo/logo.png';
import Search from "../assets/images/icons/search.png";
import Close from "../assets/images/icons/close.png";

function Navbar() {
  const navRef = useRef();
  const [showSearchField, setShowSearchField] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleSearchField = () => {
    setShowSearchField(!showSearchField);
  };

  const closeField = () => {
    setShowSearchField(false);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isNavOpen]);

  return (
    <>
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-xl-4 col-sm-4 col-3 overflow-hidden">
              <Link className='text-decoration-none' to={"/"}>
                <div className="d-flex align-items-center logo-card">
                <img src={Logo} className='logo' alt="Logo" />
                {/* <div className="title mt-3 fs-12 poppins-medium">
                <div className='text-white text-uppercase lp-1'>Calicut</div>
                <div className='text-white text-uppercase lp-2'>Halwa</div>
                </div> */}
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-xl-5 col-sm-1 col-1">
              <nav ref={navRef} className="main-nav">
                <ul>
                  <li><Link to={"/"}>Home</Link></li>
                  <li><Link to={"/catagories"}>Catagories</Link></li>
                  <li><Link to={"/products"}>Products</Link></li>
                  <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-xl-3 col-sm-7 col-8 justify-items-end align-items-center">
              <ul className='menu justify-content-end'>
                <li className='search'>
                  <button className='btn search-btn' onClick={toggleSearchField}>
                    <img className='search-img' src={Search} alt="Search" />
                  </button>
                </li>
                <li>
                <button className='btn text-white shadow-none'> <FaWhatsapp /></button>
                </li>
                <li>
                <button className='btn text-white shadow-none'> <BsCart2/></button>
                </li>
                <li>
                  <button className='btn text-white shadow-none'><FaUser/></button>
                </li>
                <li className='d-block d-xl-none'>
                  <button
                    className="nav-btn btn"
                    onClick={showNavbar}>
                    {isNavOpen ? <FaTimes /> : <FaBars />}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="search-field"
            className={`search-field ${showSearchField ? 'expand' : ''}`}>
            <input type="text" placeholder="Search..." className="search-input" />
            <button className='btn position-absolute' onClick={closeField}>
              <img className='search-img' src={Close} alt="Search" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
export default Navbar;