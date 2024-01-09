import React from 'react'
import Header from './Header'
import {Outlet} from "react-router-dom"
function Layout() {
  return (
    <div className='site-wrapper'>
      <Header/>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
