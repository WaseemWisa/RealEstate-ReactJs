import { Carousel } from '@mantine/carousel';

import './Hello.scss'

import img from '../../../../Assets/images/home-slider.png';

function Hero() {
  const data = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
    { value: 'riot', label: 'Riot' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
  ];
  return (
    <div id="hero" className="sec">
      <div className="container">
        <Carousel
          height="100%"
          slideSize="100%"
          loop
          align="start"
          slidesToScroll={1}
        >
          <Carousel.Slide>
            <div className="holder">
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
            <div className="holder">
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