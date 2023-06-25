import { Link } from 'react-router-dom';
/* Icons */
import {HiHome} from 'react-icons/hi';
import {BiChevronRight} from 'react-icons/bi';

import './BreadCrump.scss'

function Breadcrumb({title}) {
  return (
    <div className='breadcrumb'>
      <div className="container">
        <h4>{title}</h4>
        <ul className="ul">
            <li className='back'>
              <span className='i'><HiHome /></span> 
              <Link to={'/'} className='btn-home'>Home</Link>
            </li>
            <li><BiChevronRight/></li>
            <li>{title}</li>
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumb