import { Carousel } from '@mantine/carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Hello.scss'
import 'swiper/css';
import img from '../../../../Assets/images/home-slider.png';

function Hero() {
  return (
    <div id="hero" className="">
      <div className="container">
        <Carousel
          height="100%"
          slideSize="100%"
          loop
          align="start"
          slidesToScroll={1}
        >
          <Carousel.Slide>
            <div className="holder-carousel">
              <div className="col">
                  <div className="txt">
                    <h1 className="slid-title">
                      The Right Place 
                        <br />
                      of House Finding
                    </h1>
                    <p className="slider-desc desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <div className="btn-holder">
                      <button className="btn-shape">Our Services</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img src={img} alt="home-slider" />
                </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="holder-carousel">
              <div className="col">
                  <div className="txt">
                    <h1 className="slid-title">
                      The Right Place 
                        <br />
                      of House Finding
                    </h1>
                    <p className="slider-desc desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <div className="btn-holder">
                      <button className="btn-shape">Our Services</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img src={img} alt="home-slider" />
                </div>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  )
}

export default Hero