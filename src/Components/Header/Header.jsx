import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Input , Indicator } from '@mantine/core';
import './Header.scss'
import img from '../../Assets/images/logo.png';
import {BiSearch} from 'react-icons/bi';
import {GrFormClose} from 'react-icons/gr';
import {HiMenuAlt3} from 'react-icons/hi';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { useState } from 'react';
import img1 from '../../Assets/images/home.png';
import { NavLink } from 'react-router-dom';

function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const [first, setfirst] = useState(false)
  return (
    <header id='header' className='main'>
      <div className="container">
        <div className="left-side side">
          <img src={img} alt="" />
        </div>
        <ul className="middle-side side">
          <li><NavLink to="/" >home</NavLink></li>
          <li><NavLink to="/about" >about</NavLink></li>
          <li><NavLink to="/shop" >shop</NavLink></li>
          <li><NavLink to="/blog" >blog</NavLink></li>
          <li><NavLink to="/contact" >contact</NavLink></li>
        </ul>
        <div className="right-side side">
          <span><BiSearch/></span>
          <span><AiOutlineHeart/></span>
          <span onClick={() => setfirst(true)} ><FiShoppingCart/></span>
          <span onClick={open} className='drawer-icon'><HiMenuAlt3/></span>
        </div>
      </div>
      {/* Header Mobile Drawer */}
      <Drawer opened={opened} onClose={close} className='main drawer-main'>
        <div className="img-holder">
          <img src={img} alt="" />
        </div>
        <Input
          placeholder="Your email"
          className='input-search'
        />
        <ul className="drawer-side">
          <li><NavLink to="/" onClick={() => close(true)}>home</NavLink></li>
          <li><NavLink to="/about" onClick={() => close(true)}>about</NavLink></li>
          <li><NavLink to="/shop" onClick={() => close(true)}>shop</NavLink></li>
          <li><NavLink to="/blog" onClick={() => close(true)}>blog</NavLink></li>
          <li><NavLink to="/contact" onClick={() => close(true)}>contact</NavLink></li>
        </ul>
        <div className="drawer-icons">
          <span><BiSearch className='icon'/> Search</span>
          <span><BiSearch className='icon'/> Search</span>
          <span><BiSearch className='icon'/> Search</span>
        </div>
        <div className="drawer-socail">
          <span><BsFacebook/></span>
          <span><BsFacebook/></span>
          <span><BsFacebook/></span>
        </div>
      </Drawer>
      {/* Cart Drawer */}
      <Drawer opened={first} withCloseButton={false} overlayProps={{ opacity: 0.5, blur: 1 }} onClose={() => setfirst(false)} position="right" className='main drawer-main'>
          <Drawer.Header>
            <Drawer.Title>Cart</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <div className="box-holder">
              <div className="box">
                  <Indicator size={14 } offset={7} inline position="top-start" color="orange" label={<GrFormClose className='icon'/>}>
                    <img src={img1} alt="" />
                  </Indicator>
                <div className="content">
                  <h5>OE Replica Wheels</h5>
                  <span className='desc'>1 x $68.00</span>
                </div>
              </div>
              <div className="box">
                  <Indicator size={14 } offset={7} inline position="top-start" color="orange" label={<GrFormClose className='icon'/>}>
                    <img src={img1} alt="" />
                  </Indicator>
                <div className="content">
                  <h5>OE Replica Wheels</h5>
                  <span className='desc'>1 x $68.00</span>
                </div>
              </div>
            </div>
            <div className="total-price">
              <h6>Subtotal:</h6>
              <span className="price">$310.00</span>
            </div>
            <div className="btns">
              <Button className="fill-animation" variant='subtle' mt={5} color='orange'>
                Checkout
              </Button>
              <Button className="fill-animation" variant='subtle' mt={5} color='gray'>
                Ciew Cart
              </Button>
            </div>
            <p className='desc'>Free Shipping on All Orders Over $100!</p>
          </Drawer.Body>
      </Drawer>  
    </header>
  )
}

export default Header