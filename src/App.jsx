import { Routes , Route} from 'react-router-dom';
/*  Css */
import './Styles/index.scss'
import './Assets/normalize.css';
/* Pages */
import Home from './Pages/Home';
import About from './Pages/About';
/* Header & Footer */
import MainLayout from './Components/MainLayout';
import News from './Pages/News';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';




function App() {
  return (
    <Routes>
      <Route  element={<MainLayout/>}>
        <Route index path='/' element={<Home/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/blog' element={<News/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='/shop' element={<Shop/>} />
      </Route>
    </Routes>
  )
}

export default App