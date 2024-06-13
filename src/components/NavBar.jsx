import moreBtn from "../assets/svg/more_btn.svg";
import quantumLogo from "../assets/images/quantumLogo.webp";
import searchSvg from "../assets/svg/search.svg";
import { Link } from "react-router-dom";
export default function NavBar({ openSideBar }) {
  return (
    <>
      <nav className=" flex h-16 w-full items-center justify-between gap-8 px-4 text-lg font-bold text-white md:justify-center">
        <div className="flex items-center justify-center gap-6">
          <button
            className="h-10 w-10 text-white hover:scale-110 md:hidden"
            onClick={openSideBar}
          >
            <img className="h-7 w-7" src={moreBtn} alt="see components" />
          </button>

          <Link
            to={"/"}
            className="flex h-6 items-center justify-center gap-2 hover:text-green-300"
          >
            <img className="h7 w-10" src={quantumLogo} alt="" />
            Quantum
          </Link>
        </div>
        {/*   <span className="relative">
          <img src={searchSvg} alt="" />
          <input
            type="text"
            className="md:w-max w-full pl-8 bg-[var(--primary-700)] rounded-xl"
          />
        </span> */}
      </nav>
    </>
  );
}
