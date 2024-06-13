import NavBar from "../components/NavBar";
import { useState } from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [sideBar, setSideBar] = useState(false);
  function openSideBar() {
    setSideBar(!sideBar);
  }
  return (
    <>
      <div className="flex">
        <SideBar sideBar={sideBar} />
        <div className="flex w-full flex-col items-center justify-start bg-gradient-to-b from-[var(--primary-950)]">
          <NavBar openSideBar={openSideBar} />
          <section className="flex w-full flex-col items-center gap-20 pt-10 text-white">
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
}
