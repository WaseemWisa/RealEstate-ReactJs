import './Head.scss'
import { NativeSelect  ,TextInput} from '@mantine/core';

import {BsFillGrid1X2Fill} from 'react-icons/bs';
import {FaThList} from 'react-icons/fa';
import {BiSearch} from 'react-icons/bi';
import { useState , useContext} from 'react';
import { MyContext } from '../../../../App';
/* import MyContext '../../../././../App'; */

function Head() {
  const {value , setValue} = useContext(MyContext);
  const handleGrid = () => {
    setValue('grid');
  }
  const handleList = () => {
    setValue('list')
  }
  
  return (
    <div className="head">
    <div className="icons">
      <BsFillGrid1X2Fill className={`icon ${value === 'grid' ? 'active' : ''}`} onClick={() => handleGrid()}/>
      <FaThList className={`icon ${value === 'list' ? 'active' : ''}`} onClick={() => handleList()}/>

    </div>
    <div className="filter">
      <NativeSelect
        data={['Per Page 10', 'Per Page 20', 'Per Page 30', 'Per Page 40']}
        radius="xs"
        size="md"
      />
      <NativeSelect
        data={['Default Sorting', 'Sort by popularity', 'Sort by new arrivals', 'Sort by price: low to high']}
        radius="xs"
        size="md"
      />
    </div>
    <div className="filter-input">
      <TextInput
        placeholder="Search your keyword..."
        radius="xs"
      />
      <span className='icon-search'><BiSearch/></span>
    </div>
  </div>
  )
}

export default Head