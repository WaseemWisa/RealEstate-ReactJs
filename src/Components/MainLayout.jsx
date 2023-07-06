import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function MainLayout() {
  return (
    <Fragment>
      <Nav/>
      <Header/>
        <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default MainLayout