import { Button } from '@mantine/core';
import './Nav.scss';
import {MdEmail} from 'react-icons/md';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram , AiFillTwitterCircle , AiFillDribbbleCircle} from 'react-icons/ai';
function Nav() {
  return (
    <nav id='nav' className='main'>
      
        <div className="container">
          <ul className='left-side'>
            <li><span><MdEmail/></span>info@webmail.com</li>
            <li><span><FaMapMarkerAlt/></span>15/A, Nest Tower, NYC</li>
          </ul>
          <div className="right-side">
            <ul className='social-icons'>
              <li><span><BsFacebook/></span></li>
              <li><span><AiFillInstagram/></span></li>
              <li><span><AiFillTwitterCircle/></span></li>
              <li><span><AiFillDribbbleCircle/></span></li>
            </ul>
            <Button color="orange" radius="xs" size="sm">
              Add Listing
            </Button>
          </div>
        </div>
     
    </nav>
  )
}

export default Nav