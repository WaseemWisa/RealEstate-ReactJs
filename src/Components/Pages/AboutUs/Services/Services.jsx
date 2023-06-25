import Heading from '../../../Heading/Heading'
import img from '../../../../Assets/images/21.png'
import './Services.scss';
import {BsArrowRightShort} from 'react-icons/bs';

function Services() {
  return (
      <div id="services" className='sec'>
        <Heading title="Our Main Focus" label={'Our Services'}/>
        <div className="container">
          <div className="box border-bottom">
            <img src={img} alt="" />
            <h4 className="title">Buy a home</h4>
            <p className="desc">
              over 1 million+ homes for sale available on the website, 
              we can match you with a house you will want to call home.
            </p>
            <button className='btn'>Find Home <BsArrowRightShort/></button>
          </div>
          <div className="box border-bottom">
            <img src={img} alt="" />
            <h4 className="title">Buy a home</h4>
            <p className="desc">
              over 1 million+ homes for sale available on the website, 
              we can match you with a house you will want to call home.
            </p>
            <button className='btn'>Find Home <BsArrowRightShort/></button>
          </div>
          <div className="box border-bottom">
            <img src={img} alt="" />
            <h4 className="title">Buy a home</h4>
            <p className="desc">
              over 1 million+ homes for sale available on the website, 
              we can match you with a house you will want to call home.
            </p>
            <button className='btn'>Find Home <BsArrowRightShort/></button>
          </div>
        </div>
      </div>
  )
}

export default Services