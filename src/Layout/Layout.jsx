import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import LetestFooter from '../Components/Footer/LetestFooter'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='w-[90%] mx-auto'>
        {
          children
        }
        {/* <Footer /> */}
      </div>
        <LetestFooter/>
    </>

  )
}

export default Layout
