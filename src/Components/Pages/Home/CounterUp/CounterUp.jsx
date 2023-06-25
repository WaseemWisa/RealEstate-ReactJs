import CountUp from 'react-countup';
import { HiHome } from 'react-icons/hi';
import './CounterUp.scss';
function CounterUp() {
  return (
  <div id="counter-up" className="sec">
    <div className="container">
      <div className="col">
        <span className="i"><HiHome/></span>  
        <h4 className="count"><CountUp end={100} /></h4>
        <span className="title">Title</span>
      </div>
      <div className="col">
        <span className="i"><HiHome/></span>  
        <h4 className="count"><CountUp end={100} /></h4>
        <span className="title">Title</span>
      </div>
      <div className="col">
        <span className="i"><HiHome/></span>  
        <h4 className="count"><CountUp end={100} /></h4>
        <span className="title">Title</span>
      </div>
      <div className="col">
        <span className="i"><HiHome/></span>  
        <h4 className="count"><CountUp end={100} /></h4>
        <span className="title">Title</span>
      </div>
    </div>
  </div>
  )
}

export default CounterUp