import NavBar from "../components/NavBar";

import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import NavBarMobile from "../components/NavBarMobile";

export default function Layout() {
  return (
    <>
      <div className="flex">
        <SideBar />
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
