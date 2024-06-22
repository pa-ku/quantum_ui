import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SideBar({ sideBar }) {
  return (
    <>
      <aside
        className={`${sideBar && "left-0"} items-star fixed -left-full top-20 z-50 flex hidden h-svh w-52 flex-col gap-5 rounded-tr-lg bg-[var(--dark-200)] px-3 py-5 text-lg text-white opacity-95 duration-300 md:sticky md:top-0 md:flex md:rounded-none`}
      >
        <LinkComponent to={"/buttons"}>Buttons</LinkComponent>
        <LinkComponent to={"/checkboxes"}>Checkboxes</LinkComponent>
        <LinkComponent to={"/inputs"}>Inputs</LinkComponent>
        {/*  <LinkComponent to={"/forms"}>Forms</LinkComponent> */}
        <LinkComponent to={"/cards"}>Cards</LinkComponent>
        <LinkComponent to={"/animations"}>Animations</LinkComponent>
      </aside>

      <aside
        className={`${sideBar && "-translate-y-0"} fixed bottom-0 z-50 h-max w-full translate-y-full bg-[var(--dark-200)] p-5 pb-20 text-white opacity-90 duration-300 md:hidden`}
      >
        <LinkComponent to={"/buttons"}>Buttons</LinkComponent>
        <LinkComponent to={"/checkboxes"}>Checkboxes</LinkComponent>
        <LinkComponent to={"/inputs"}>Inputs</LinkComponent>
        {/*  <LinkComponent to={"/forms"}>Forms</LinkComponent> */}
        <LinkComponent to={"/cards"}>Cards</LinkComponent>
        <LinkComponent to={"/animations"}>Animations</LinkComponent>
      </aside>
    </>
  );
}

function LinkComponent({ to, children }) {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    console.log(navigate);
    navigate(to);
  };

  return (
    <>
      <div className="relative flex">
        <p className="pointer-events-none z-10 px-3 py-0.5">{children}</p>
        <input
          className="absolute h-full w-full cursor-pointer appearance-none rounded-xl opacity-100 outline-1 outline-secundary-700 duration-150 checked:bg-secundary-800 checked:outline hover:outline"
          name="sidebar"
          onClick={handleLinkClick}
          type="radio"
        />
      </div>
    </>
  );
}

//Posible agregado de un bandoñon para mas navegacion
{
  /*     {active && (
          <div className="h-full flex-col duration-200">
            <button className="flex w-full rounded-2xl px-10 py-1 hover:bg-[var(--primary-600)]">
              test
            </button>
            <button className="flex w-full rounded-2xl px-10 py-1 hover:bg-[var(--primary-600)]">
              test
            </button>
          </div>
        )} */
}
