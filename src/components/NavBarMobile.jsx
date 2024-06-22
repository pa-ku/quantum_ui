import moreBtn from "../assets/svg/more_btn.svg";
import quantumLogo from "../assets/images/quantumLogo.webp";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

export default function NavBarMobile({ sideBar }) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <header className="fixed bottom-0 z-50 flex h-16 w-full items-center justify-between gap-8 bg-[var(--dark-200)] px-4 text-lg font-bold text-white md:hidden">
        <Link
          to={"/"}
          className="flex h-6 items-center justify-center gap-2 hover:text-primary-100"
        >
          <img className="h7 w-10" src={quantumLogo} alt="" />
          Quantum
        </Link>
        <div className="flex items-center justify-center gap-6">
          <button
            className="h-10 w-10 text-white hover:scale-110 md:hidden"
            onClick={handleMenu}
          >
            <img className="h-7 w-7" src={moreBtn} alt="see components" />
          </button>
        </div>
      </header>
      <nav
        className={`${!openMenu && "translate-y-80"} fixed bottom-0 left-0 flex h-max w-full flex-col gap-2 bg-[var(--dark-200)] p-5 pb-20 text-white opacity-90 duration-300 md:hidden`}
      >
        <NavLinks />
      </nav>
    </>
  );
}
