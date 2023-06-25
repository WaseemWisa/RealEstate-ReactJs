import React from 'react';
/* Components */
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import Services from '../Components/Pages/AboutUs/Services/Services'
/* Pages */
import Team from '../Components/Pages/AboutUs/Team.jsx/Team'
import AboutUs from '../Components/Pages/AboutUs/AboutUs/AboutUs'
import Feedback from '../Components/Pages/AboutUs/Feedback/Feedback';
import News from '../Components/Pages/AboutUs/News/News';

function About() {
  return (
    <main>
      <Breadcrumb title={'About Us'}/>
      <AboutUs/>
      <Services/>
      <Team/>
      <Feedback/>
      <News/>
    </main>
  )
}

export default About