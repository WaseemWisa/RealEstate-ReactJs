import './Sells.scss';
import img from '../../../../Assets/images/properties.png'
/* icons */
import { FaVectorSquare } from 'react-icons/fa';

function Sells() {
  return (
    <div id="sells" className='sec'>
      <div className="container">
        <div className="col">
        <span className="label">About us</span>
        <h3>Today Sells Properties</h3>
        <p className="desc">
          Houzez allow you to design unlimited panels and record all information
          real estate custom forms to capture leads and keep of 
        </p>
        <ul className='fets'>
          <li className='fet'>all information</li>
          <li className='fet'>all information</li>
          <li className='fet'>Live Music Cocerts at Luviana</li>
          <li className='fet'>Live Music Cocerts at Luviana</li>
        </ul>
        <ul className='info-list'>
          <li>
            <span> 2 <FaVectorSquare/> </span>
            square Ft
          </li>
          <li>
            <span> 2 <FaVectorSquare/> </span>
            square Ft
          </li>
          <li>
            <span> 2 <FaVectorSquare/> </span>
            square Ft
          </li>
          <li>
            <span> 2 <FaVectorSquare/> </span>
            square Ft
          </li>
        </ul>
        </div>
        <div className="col">
          <img src={img} alt="img " className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default Sells