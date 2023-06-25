import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import './Properties.scss';
import img from '../../../../Assets/images/property2.jpg';
import img2 from '../../../../Assets/images/author.jpg';
import { FaVectorSquare } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import Data from './Data';
import Heading from '../../../Heading/Heading';

function Properties() {
  const [data , setData] = useState(Data);
  console.log(data)
  const breakpointsizes = [
    { maxWidth: "md", slideSize: "50%"},
    { maxWidth: "lg", slideSize: "50%"},
    { maxWidth: "sm", slideSize: "100%"},
  ]
  return (
    <div id="properties" className="sec">
      <Heading title={'Featured Listings'} label={'Properties'}/>
      <div className="container"> 
      <Carousel
        height="100%"
        slideSize="33.333333%"
        loop
        align="start"
        breakpoints={breakpointsizes}
        slidesToScroll={1}
      >
        {
            data.map((item ) => {
              return (
                <Carousel.Slide key={item.id}>
                  <div className="product-card" >
                    <div className="product-img">
                      <img src={item.img} alt="img" />
                      <span className="badge">for sale</span>
                    </div>
                    <div className="product-info">
                      <span className="price">{item.price}/month</span>
                        <h5 className="title">{item.title}</h5>
                        <p className="desc">
                          Beautiful Huge 1 Family House In Heart Of 
                          <br />
                          Westbury. Newly Renovated With New Wood
                        </p>
                        <ul className='info-list'>
                          <li> <span> 2 <FaVectorSquare/> </span> square Ft </li>
                          <li> <span> 2 <FaVectorSquare/> </span> square Ft </li>
                          <li> <span> 2 <FaVectorSquare/> </span> square Ft </li>
                        </ul>
                    </div>
                    <div className="product-agent-info">
                      <div className="agent-info">
                        <img src={img2} alt="" />
                        <div className="">
                          <span>William Seklo</span>
                          <small>Estate Agents</small>
                        </div>
                      </div>
                      <ul className='btn-list'>
                        <li> <AiFillHeart/> </li>
                        <li> <AiFillHeart/> </li>
                        <li> <AiFillHeart/> </li>
                      </ul>
                    </div>
                  </div>
                </Carousel.Slide>
              )
            })
        }
      </Carousel>
      </div>
    </div>
  )
}

export default Properties