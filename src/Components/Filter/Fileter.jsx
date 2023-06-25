import { MultiSelect } from '@mantine/core';

import './Filter.scss';

function Fileter() {
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
    <div id="filter">
      <div className="fileter-select">
          <div className="dropdown-holder">
            <MultiSelect
              data={data}
              placeholder="Choose Area"
              dropdownPosition="bottom"
              className='select'
            />
            <MultiSelect
              data={data}
              placeholder="Choose Area"
              dropdownPosition="bottom"
              className='select'
            />
            <MultiSelect
              data={data}
              placeholder="Choose Area"
              dropdownPosition="bottom"
              className='select'
            />
          </div>
          <button className="btn-shape">find now</button>
        </div>
    </div>
  )
}

export default Fileter