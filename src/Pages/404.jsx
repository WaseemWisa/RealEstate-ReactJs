import { useNavigate } from "react-router-dom";

import errorBg from '../Assets/images/error-bg.png';
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb';
import {  Button} from '@mantine/core';
import {BiArrowBack} from 'react-icons/bi'
import '../Components/Pages/404/404.scss'
function Error() {
  const navigate = useNavigate();
  return (
    <main id="error">
      <div className="container">
        <img src={errorBg} alt="errorBg" className='cover' />
        <div className="txt">
          <h2>Page Not Found!</h2>
          <p className='desc'>
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>
        </div>
        <Button color="orange" mt="xl" size="lg" type='submit' onClick={() => navigate('/')}>
          <BiArrowBack/> Back to home
        </Button>
      </div>
    </main>
  )
}

export default Error