import NavBar from '../components/NavBar'
import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import NavBarMobile from '../components/NavBarMobile'

export default function Layout({ home }) {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex w-full flex-col items-center justify-start lg:pl-48">
          <NavBar />
          <div
            className={`flex w-full flex-col items-center gap-20 py-10 pb-28 text-white`}
          >
            <Outlet />
            <NavBarMobile />
          </div>
        </div>
      </div>
    </>
  )
}
