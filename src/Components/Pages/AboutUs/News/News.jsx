import { useState } from "react";
import { createStyles, getStylesRef } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Data from "./Data";
import Heading from "../../../Heading/Heading";

import {BsTagsFill , BsFillCalendarDateFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';


import './News.scss'


const breakpointsizes = [
  { maxWidth: "md", slideSize: "50%"},
  { maxWidth: "lg", slideSize: "50%"},
  { maxWidth: "sm", slideSize: "100%"},
]

const useStyles = createStyles(() => ({
/*   wrapper: {
    padding: '1rem 0'
  }
 */
}));
function News() { 
  const [data, setData] = useState(Data)
  const { classes } = useStyles();
  return (
    <div id="news" className="sec " >
      <Heading title={'Leatest News Feeds'} label={'News & Blogs'} />
      <div className="container">
      <Carousel
        height="100%"
        slideSize="33.333333%"
        slideGap={20}
        m="1rem"
        p="1rem 0"
        loop
        align="start"
        breakpoints={breakpointsizes}
        slidesToScroll={1}
        className={classes.wrapper}
      >
        {
          data.map((item , i) => {
            return (
              <Carousel.Slide>
                <div className="slide-content">
                  <img src={item.img} alt="" className={'img'} />
                  <div className="content">
                    <div className={'tags'}>
                      <span className={'tag'}><CgProfile className="i"/>Trends</span>
                      <span className={'tag'}><BsTagsFill className="i"/>Trends</span>
                      <span className={'tag'}><BsTagsFill className="i"/>Trends</span>
                    </div>
                    <h4>{item.title}</h4>
                    <div className="more">
                      <span className="date"><BsFillCalendarDateFill className="i"/>{item.date}</span>
                      <button className="btn">Read More</button>
                    </div>
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

export default News