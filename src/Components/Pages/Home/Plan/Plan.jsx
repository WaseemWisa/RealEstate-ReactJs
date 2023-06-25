import { Tabs } from '@mantine/core';
import './Plan.scss'

/* imgs */
import img from '../../../../Assets/images/deluxe.jpg';
import tabImg from '../../../../Assets/images/tabs.jfif';
import Heading from '../../../Heading/Heading';

function Plan() {
  return (
  <div id="plan" className="sec">
    <Heading title={'Apartments Plan'} label={'Apartment Sketch'}/>
    <Tabs defaultValue="studio" unstyled>
      <Tabs.List className='tabs'>
        <Tabs.Tab value="studio" className='tab'>The Studio</Tabs.Tab>
        <Tabs.Tab value="portion" className='tab'>Deluxe Portion</Tabs.Tab>
        <Tabs.Tab value="penthouse" className='tab'>Penthouse</Tabs.Tab>
        <Tabs.Tab value="garden" className='tab'>Top Garden</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="studio">
        <div className="holder">
        <div className="col">
            <img src={tabImg} alt="" className='w-full'/>
          </div>
          <div className="col">
            <img src={img} alt="" className='w-full'/>
          </div>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="portion">
                <div className="holder">

          <div className="col">
            <img src={tabImg} alt="" className='w-full'/>
          </div>
          <div className="col">
            <img src={img} alt="" className='w-full'/>
          </div>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="penthouse">
                <div className="holder">
                <div className="col">
            <img src={tabImg} alt="" className='w-full'/>
          </div>
          <div className="col">
            <img src={img} alt="" className='w-full'/>
          </div>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="garden">
                <div className="holder">
                <div className="col">
            <img src={tabImg} alt="" className='w-full'/>
          </div>
          <div className="col">
            <img src={img} alt="" className='w-full'/>
          </div>
        </div>
      </Tabs.Panel>
    </Tabs>
  </div>
  )
}

export default Plan