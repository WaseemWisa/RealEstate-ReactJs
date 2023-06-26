import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function MainLayout() {
  return (
    <Fragment>
      <Header/>
        <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default MainLayout