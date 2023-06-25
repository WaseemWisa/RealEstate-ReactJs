import { useState } from 'react';
import Data from './Data';
import './Info.scss'
function Info() {
  const [data, setData] = useState(Data);
  return (
    <div className='info'>
      {
        data.map((item , i)  => {
          return (
            <div className="col" key={i}>
              <img src={item.img} alt="img" />
              <h4>{item.title}</h4>
                <span className='desc'>{item.content1}</span>
                <span className='desc'>{item.content2}</span>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default Info