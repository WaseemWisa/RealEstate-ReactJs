import {useState} from 'react'
import ModalVideo from 'react-modal-video'
import '../../../../Assets/modal-video.min.css';
import './AboutUs.scss';
import {GrHomeRounded} from 'react-icons/gr';
import {VscRunAll} from 'react-icons/vsc';
import img from '../../../../Assets/images/7.png';
import img2 from '../../../../Assets/images/room.jpg';
function AboutUs() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div id="about-us" className='sec'>
      <ModalVideo channel='youtube'  autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <div className="container">
        <div className="col img-holder">
          <img src={img} alt="img" />
          <div className="bg-video">
            <img src={img2} alt="" />
            <span className="btn circle" onClick={()=> setOpen(true)}><VscRunAll/></span>  
          </div>
        </div>
        <div className="col content-holder">
          <span className="label">About us</span>
          <h3>
            The Leading Real Estate Rental Marketplace.
          </h3>
          <p className="desc">
            Over 39,000 people work for us in more than 70 
            countries all over the 
            This breadth of global coverage, combined 
            with specialist services
          </p>
          <div className="features">
            <div className="fet">
              <span className="i"><GrHomeRounded/></span>
              <span className='title'>Smart Home Design</span>
            </div> 
            <div className="fet">
              <span className="i"><GrHomeRounded/></span>
              <span className='title'>Smart Home Design</span>
            </div> 
            <div className="fet">
              <span className="i"><GrHomeRounded/></span>
              <span className='title'>Smart Home Design</span>
            </div> 
            <div className="fet">
              <span className="i"><GrHomeRounded/></span>
              <span className='title'>Smart Home Design</span>
            </div> 
          </div>
          <p className="queote desc">
            "Enimad minim veniam quis nostrud exercitation
            llamco laboris. Lorem ipsum dolor sit amet"
          </p>
          <button className="btn-shape">Our Services</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs