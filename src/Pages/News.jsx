import { useState } from 'react';
import { Pagination } from '@mantine/core';
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb"
import Data from '../Components/Pages/AboutUs/News/Data';

import {BsTagsFill , BsFillCalendarDateFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';

import '../Components/Pages/News/Blog.scss'

function News() {
  const [data , setDate] = useState(Data);
  console.log(data);
  return (
    <main>
      <Breadcrumb title={'Blog Grid'}/>
      <div id="blog" className='sec'>
        <div className="container">
          {
            data.map((item , i ) => {
              return (
                <div className="card">
                  <div className="img-holder">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="content">
                    <ul className="tags">
                      <li className="tag"><BsTagsFill className='i'/>Services</li>
                      <li className="tag"><CgProfile className='i'/>by: admin</li>
                    </ul>
                    <h5 className='title'>{item.title}</h5>
                    <div className="bottom">
                      <span className="date"> <BsFillCalendarDateFill className='i'/> August 22, 2020</span>
                      <button className='btn'>READ MORE</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Pagination total={10} color="orange" />
    </main>
  )
}

export default News