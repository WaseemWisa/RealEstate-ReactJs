import { useState } from "react";
import { createStyles, getStylesRef } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Data from "./Data";
import Heading from "../../../Heading/Heading";
import { ImQuotesLeft } from "react-icons/im";

import './Feedback.scss'
const useStyles = createStyles(() => ({
  slid: {
    userSelect: 'none',
    boxShadow: '0 5px 20px 0 rgba(23, 44, 82, 0.1)',
    padding: '30px 35px 40px',
    background: '#fff',
    borderRadius: '10px',
  },
  desc: {
    lineHeight: '2',
    color: 'grey'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  img: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
  i: {
    marginRight: '0.5rem'
  },
  profileName: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0',
  },
  profileTitle: {
    color: 'grey'
  }

}));
const breakpointsizes = [
  { maxWidth: "md", slideSize: "50%"},
  { maxWidth: "lg", slideSize: "50%"},
  { maxWidth: "sm", slideSize: "100%"},
]

function Feedback() {
  const [data, setData] = useState(Data)
  const { classes } = useStyles();
  return (
    <div id="feedback" className="sec">
      <Heading title={"Clients Feedback"} label={"Our Testimonial"} />
      <div className="container">
      <Carousel
        height="100%"
        slideSize="33.333333%"
        slideGap={20}
        m="1rem"
        loop
        align="start"
        breakpoints={breakpointsizes}
        slidesToScroll={1}
      >
        {
          data.map((item) => {
            return (
              <Carousel.Slide >
                <div className={classes.slid  + ' border-bottom'} >
                  <p className={classes.desc}>
                    <span className={classes.i}>
                      <ImQuotesLeft></ImQuotesLeft>
                    </span>
                    {item.desc}
                  </p>
                  <div className={classes.content}>
                    <img src={item.img} alt="img" className={classes.img} />
                    <div className={classes.profile}>
                      <h5 className={classes.profileName}>{item.name}</h5>
                      <span className={classes.profileTitle}>{item.job}</span>
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
  );
}

export default Feedback;
