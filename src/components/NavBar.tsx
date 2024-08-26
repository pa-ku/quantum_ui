import quantumLogo from "../assets/images/quantumLogo.webp";
import { Link } from "react-router-dom";
import React from "react";
export default function NavBar() {
  return (
    <>
      <nav className="bottom-0 z-10 hidden h-16 w-full items-center justify-between gap-8 bg-[var(--dark-200)] px-4 text-lg font-bold text-white md:relative md:flex md:justify-center md:bg-background">
        <Link
          to={"/"}
          className="flex h-6 items-center justify-center gap-2 hover:text-primary-100"
        >
          <img className="h7 w-10" src={quantumLogo} alt="" />
          Quantum
        </Link>
      </nav>
    </>
  );
}
