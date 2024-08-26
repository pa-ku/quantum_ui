import { useState } from "react";
import NavLinks from "./NavLinks";
import ColorHandler from "./ui/ColorHandler";
import React from "react";

export default function SideBar() {
  const [primary, setPrimary] = useState("#20ac84");
  const [secundary, setSecundary] = useState("#cd61ff");
  const [showCustom, setSowCustom] = useState(false);

  const changePrimary = (e) => {
    setPrimary(e.target.value);
    document.documentElement.style.setProperty("--primary", primary);
  };
  const changeSecundary = (e) => {
    setSecundary(e.target.value);
    document.documentElement.style.setProperty("--secundary", secundary);
  };
  return (
    <>
      <aside
        className={`fixed top-0 z-20 hidden h-svh w-52 flex-col gap-5 rounded-none bg-[var(--dark-200)] px-3 py-5 text-lg text-white opacity-95 md:flex`}
      >
        <NavLinks />
        <hr className="border-slate-500" />

        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            className="peer absolute h-full w-full cursor-pointer appearance-none"
            onChange={() => setSowCustom(!showCustom)}
          />
          <p className="pointer-events-none rounded-xl bg-slate-700 px-4 py-2 peer-checked:bg-primary-700 peer-checked:shadow-center peer-checked:shadow-primary-800">
            Custom Colors
          </p>
        </div>
        {showCustom && (
          <footer className="fixed bottom-0 left-0 right-0 z-10 flex h-36 w-full items-center justify-center gap-2">
            <ColorHandler onChange={(e) => changePrimary(e)} value={primary}>
              Primary
            </ColorHandler>
            <ColorHandler
              onChange={(e) => changeSecundary(e)}
              value={secundary}
            >
              Secundary
            </ColorHandler>
          </footer>
        )}
      </aside>
    </>
  );
}
