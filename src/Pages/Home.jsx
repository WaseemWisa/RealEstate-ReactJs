import React from 'react'
import AboutUs from '../Components/Pages/AboutUs/AboutUs/AboutUs';
import Services from '../Components/Pages/AboutUs/Services/Services';
import CounterUp from '../Components/Pages/Home/CounterUp/CounterUp';
import Video from '../Components/Pages/Home/Video/Video';
import Sells from '../Components/Pages/Home/AboutUs/Sells';
import News from '../Components/Pages/AboutUs/News/News';
import Feedback from '../Components/Pages/AboutUs/Feedback/Feedback';
import Plan from '../Components/Pages/Home/Plan/Plan';
import Aminities from '../Components/Pages/Home/Aminities/Aminities';
import Hero from '../Components/Pages/Home/Hero/Hero';
import Fileter from '../Components/Filter/Fileter';
import Properties from '../Components/Pages/Home/Properties/Properties';
function Home() {
  return (
    <main>
      <Hero/>
      <Fileter/>
      <AboutUs/>
      <CounterUp/>
      <Sells/>
      <Services/>
      <Properties/>
      <Aminities/>
      <Video/>
      <Plan/>
      <Feedback/>
      <News/>
    </main>

  )
}

export default Home