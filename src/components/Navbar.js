// NavbarAd.js
import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { LuShoppingCart } from 'react-icons/lu';
import styles from '../styles/Navbar.module.css';
import Brand1 from '../images/logo.png';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
//import SearchRes from './SearchRes';
import { useSelector } from 'react-redux';
//import FilterComponent from './FilterComponent';

function NavbarAd() {
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <header>

      <nav className={`${styles.navbar2} ${isActive ? styles.active : ''}`}>

        <Link className={`${styles.logo}`} to="/">
          <img style={{ height: '35px', width: '85px' }} src={Brand1} alt="logo" />
        </Link>

        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          <li>
            <Link to="/smartphone" className={`${styles.navLink}`}>
              <span> Smartphones </span>
            </Link>
          </li>

          <li onClick={removeActive}>
            <Link to="/motorcycle" className={`${styles.navLink}`}>
              <span> Motorcycles </span>
            </Link>
          </li>

          <li>
            <Link to="/skincare" className={`${styles.navLink}`}>
              Skincare
            </Link>
          </li>
        </ul>    
        
        <div className="serchIcons" style={{ width: '200px', textAlign: 'end' }}>

          <FaRegUser />

          <Link className="wishlistItems" to="/wishlist">
            <FaRegHeart />
          </Link>

          <Link className="cartItems" to="/cart">
            <LuShoppingCart />
            <span className="count">
              <span>{getTotalQuantity() || 0}</span>
            </span>
          </Link>

        </div>

        <div className="lg_show">
          <SearchBar />
        </div>

        <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </nav>

      <div className="mb_show mb_serchbar ">
        <SearchBar />
      </div>
    </header>
  );
}

export default NavbarAd;