import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import style from "../styles/footer.module.css"


const Footer = () => {
  return (
    <>
      <div className={`${style.footerList}`}>
        <div className="container">
          <div className="row">

            <div className="col-lg-4">
              <h5>ONLINE SHOPPING</h5>

              <ul>
                <li>
                  {" "}
                  <Link to="/">Men </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/">Women</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/">Kids </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/">Home & Living </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/">Beauty </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/">Electronics </Link>{" "}
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <h5>ABOUT</h5>
              <ul>
                <li>
                  {" "}
                  <Link to="/">About Us </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/">Contact </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/">Careers </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/">Cara Stories </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/">Press </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/">Corporate Information </Link>{" "}
                </li>
              </ul>
            </div>

            
            <div className="col-lg-4">
              <div className="contact">
               
                <h5>Contact</h5>

                <ul>
                <li>{" "}
                <b>Address:</b> Sir Syed Ahmed Road, Street 06. Okhla, New
                    Delhi
                </li>
                <li>{" "}
                <b>Phone:</b> +91-8840544175
                </li>
                <li>{" "}
                <b>Hours</b> 10:00 - 18:00. Mon - Sat
                </li>
              </ul>

                
              
                <div className="socials mt-3">
                <h5>Follow Us</h5>
                  <FaFacebookSquare />
                  <FaYoutubeSquare />
                  <FaTelegram />
                  <FaInstagram />
                  <FaTwitter />
                </div>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-12 text-center">
              <hr></hr>

              <p>© 2024 www.cara.com. All rights reserved.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
