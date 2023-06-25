import Heading from '../../../Heading/Heading';
import './Team.scss';
import img from '../../../../Assets/images/agent5.jpg'

import { AiOutlineTwitter , AiFillLinkedin , AiFillFacebook} from 'react-icons/ai';

function Team() {
  return (
    <div id="team" className="sec">
      <Heading title="Property Agents" label={'Team'}/>
      <div className="container">
        <div className="box">
          <img src={img} alt="" />
          <div className="content">
            <h4 className='team-name'>Miranda H. Halim</h4>
            <span className="team-job">Property Seller</span>
            <div className="team-social">
              <span className='icon'><AiFillFacebook/></span>
              <span className='icon'><AiOutlineTwitter/></span>
              <span className='icon'><AiFillLinkedin/></span>
            </div>
          </div>
        </div>
        <div className="box">
          <img src={img} alt="" />
          <div className="content">
            <h4 className='team-name'>Miranda H. Halim</h4>
            <span className="team-job">Property Seller</span>
            <div className="team-social">
              <span className='icon'><AiFillFacebook/></span>
              <span className='icon'><AiOutlineTwitter/></span>
              <span className='icon'><AiFillLinkedin/></span>
            </div>
          </div>
        </div>
        <div className="box">
          <img src={img} alt="" />
          <div className="content">
            <h4 className='team-name'>Miranda H. Halim</h4>
            <span className="team-job">Property Seller</span>
            <div className="team-social">
              <span className='icon'><AiFillFacebook/></span>
              <span className='icon'><AiOutlineTwitter/></span>
              <span className='icon'><AiFillLinkedin/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team