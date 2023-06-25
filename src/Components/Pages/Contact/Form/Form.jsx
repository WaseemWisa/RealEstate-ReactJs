import { Checkbox , NativeSelect  , Textarea  , Input} from '@mantine/core';


import './Form.scss';

import {CgProfile} from 'react-icons/cg';

function Form() {
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
    <div className="form">
      <form>
        <h5>Get a quote</h5>
        <div className="row">
          <div className="">
            <Input placeholder="Your email" radius="xs" size="md" className=' input'/>
            <span><CgProfile/></span>
          </div>
          <div className="">
            <Input placeholder="Your email" radius="xs" size="md" className=' input'/>
            <span><CgProfile/></span>
          </div>
        </div>
        <div className="row">
          <div className="">
          <NativeSelect 
            data={data}
            placeholder="Select Services Type"
          />
            <span><CgProfile/></span>
          </div>
          <div className="">
            <Input placeholder="Your email" radius="xs" size="md" className=' input'/>
            <span><CgProfile/></span>
          </div>
        </div>
        <div className="row full">
          <div className="">
            <Textarea placeholder='Write a thing' />
            <span><CgProfile/></span>
          </div>
        </div>
        <Checkbox className='label-form' label="Save my name, email, and website in this browser for the next time I comment." color="orange"/>
        <button type='submit' className="btn btn-shape">Get a free services</button>
      </form>
    </div>
  )
}

export default Form