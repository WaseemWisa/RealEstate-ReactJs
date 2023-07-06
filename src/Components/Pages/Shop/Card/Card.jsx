import { Fragment, useState , useContext} from 'react';
import Data from './Data.js';
import {MdLocationOn} from 'react-icons/md';
import {AiFillHeart} from 'react-icons/ai';
import './Card.scss'
import { Pagination } from '@mantine/core';
import Head from '../Head/Head.jsx';
import { MyContext } from '../../../../App.jsx';

function Card() {
  const [data, setData] = useState(Data);
  const {value , setValue} = useContext(MyContext);
  return (
    <Fragment>
      
      <div className={`holder ${value}`}>
        {
          data.map((item , i) => {
            return (
              <div className="card">
                <div className="img-holder">
                  <img src={item.img} className='cover' alt="" />
                  <img src={item.author} className='author-img' alt="" />
                </div>
                <div className="content">
                  <span className="state">{item.state}</span>
                  <h4>{item.title}</h4>
                  <span className='location'><MdLocationOn className='icon'/> {item.location}</span>
                  <ul>
                    <li>3 Bed</li>
                    <li>2 Bath</li>
                    <li>3450 Square Ft</li>
                  </ul>
                  <div className='btns'>
                    <button><AiFillHeart/></button>
                    <button><AiFillHeart/></button>
                    <button><AiFillHeart/></button>
                  </div>
                  <span className='price'>${item.sale} <small className='price-small'>/month</small> </span>
                </div>
              </div>
            )
          })
        }
      </div>
        <Pagination total={10} color="orange" />
    </Fragment>
  )
}

export default Card