import { Input } from '@mantine/core';
import img from '../../Assets/images/logo.png';
import img2 from '../../Assets/images/payment-4.png';
import {HiMail} from 'react-icons/hi';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram , AiFillTwitterCircle , AiFillDribbbleCircle} from 'react-icons/ai';
import './Footer.scss'
function Footer() {
  return (
    <footer id='footer' className='main'>
      <div className="container">
        <div className="col">
          <img src={img} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum is dummy text of the printing.
          </p>
          <ul>
            <li>Brooklyn, New York, United States</li>
            <li>+0123-456789</li>
            <li>example@example.com</li>
          </ul>
          <div className='social-icons'>
              <span><span><BsFacebook/></span></span>
              <span><span><AiFillInstagram/></span></span>
              <span><span><AiFillTwitterCircle/></span></span>
              <span><span><AiFillDribbbleCircle/></span></span>
            </div>
        </div>
        <div className="col">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>All Products</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="col">
          <h4>Services</h4>
          <ul>
            <li>About</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="col">
          <h4>Customer Care</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="col">
          <h4>Newsletter</h4>
          <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
          <Input
            placeholder="Your email"
            icon={<HiMail/>}
          />
          <h4>We Accept</h4>
          <img src={img2} alt="" className='paymentsImg' />
        </div>
      </div>
      <div className="end">
        <div className="content">
          <span>All Rights Reserved @ Company 2023</span>
          <ul>
            <li>Terms & Conditions</li>
            <li>Claim</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer