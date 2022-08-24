import React from "react";
import { FaMapMarkerAlt,FaUserPlus,FaEnvelope,FaInstagram,FaTwitter,FaFacebook,FaGoogle,FaSearch} from "react-icons/fa";
import googlePlay from '../../images/googleplay.png';
import appStore from '../../images/appstore.png';
import './FooterStyle.css';
const Footer = () => {
  return (
    <>
      <div className=" footer PoppinsFont  pt-5 border-bottom">
      <div className="d-flex justify-content-around align-items-top">
            <div>
              <h5 className="mb-4 PoppinsFont  headings text-uppercase">
                Customer Care
              </h5>
              <ul className="list-group PoppinsFont">
                <li className="list-group-item PoppinsFont listItems bg-transparent border-0 p-0 mb-2">
                    Account
                </li>
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                  
                    My Order
                </li>
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                    Wishlist
                </li>
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                   FAQs
                </li>
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                  Support
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 PoppinsFont  headings text-uppercase">
                 ABOUT
              </h5>
              <ul className="list-group PoppinsFont">
                <li className="list-group-item listItems  bg-transparent border-0 p-0 mb-2">
                 Company Info
                </li>
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                  Interior Works
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 PoppinsFont  headings text-uppercase">Users Policy</h5>
              <ul className="list-group PoppinsFont">
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                 Terms and Conditions
                </li>
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                   Data Policy
                </li>
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                  Cookies Policy
                </li>
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                  Refund Policy
                </li>
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                  Return Policy
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 PoppinsFont  headings text-uppercase">Connect With Us</h5>
              <ul className="list-grou PoppinsFontp">
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                  <span className="d-flex justify-content-around socialMedia mb-2"><FaInstagram/>  <FaTwitter/>  <FaFacebook/>  <FaGoogle/></span>
                </li>
                <li className="mt-5 list-group-item listItems bg-transparent border-0 p-0 mb-2">
                  <p className=" ">SOON ON:</p>
                  <div className="d-flex flex-column">
                  <img className="mb-3 appImage" src={googlePlay} />
                  <img className="appImage" src={appStore} />
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 PoppinsFont headings  text-uppercase">
                Stay Connected
              </h5>
              <ul className="list-group PoppinsFont">
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                   <span><FaMapMarkerAlt /> &nbsp; Baneshwor,Kathmandu,Nepal</span>
                </li>
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                    <span><FaUserPlus/> &nbsp; +977-9100000000</span>
                </li>
                <li className="list-group-item listItems bg-transparent border-0 p-0 mb-2">
                    <span><FaEnvelope/> &nbsp; test@gmail.com</span>
                </li>
              </ul>
            </div>
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5 align-items-center flex-column">
        <h2 className="subscribeText PoppinsFont">
        Subscribe to get amazing offers
        </h2>
          <div className="form-group d-flex subscribe justify-content-center align-items-center  has-search">
              <input type="text" className="form-control mt-2" placeholder="Enter your email"/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
