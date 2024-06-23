import NavBar from "../components/NavBar";
import { useState } from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import NavBarMobile from "../components/NavBarMobile";

export default function Layout() {
  const [sideBar, setSideBar] = useState(false);
  function openSideBar() {
    setSideBar(!sideBar);
  }
  return (
    <>
      <div className="flex">
        <SideBar sideBar={sideBar} />
        <div className="flex w-full flex-col items-center justify-start">
          <NavBar />
          <section className="flex w-full flex-col items-center gap-20 py-10 pb-28 text-white">
            <Outlet />
            <NavBarMobile />
          </section>
        </div>
      </div>
    </>
  );
}
