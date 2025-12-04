import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
       <Header />
     <div className='w-[90%] mx-auto'>
      {
        children
      }
      <Footer />
    </div>
    </>
   
  )
}

export default Layout
