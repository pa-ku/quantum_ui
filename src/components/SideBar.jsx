import { Link } from "react-router-dom";

export default function SideBar({ sideBar }) {
  return (
    <>
      <aside
        className={`${sideBar && "left-0"} fixed items-star z-100 to-[var(--primary-600) md:rounded-non -left-full top-20 z-10 flex h-svh w-52 flex-col gap-5 rounded-tr-lg bg-[var(--primary-700)] bg-gradient-to-tr from-[var(--primary-800)] px-2 py-5 text-lg text-white opacity-95 duration-300 md:static md:sticky md:top-0 md:flex`}
      >
        <LinkComponent to={"/buttons"}>Buttons</LinkComponent>
        <LinkComponent to={"/checkboxes"}>Checkboxes</LinkComponent>
        <LinkComponent to={"/inputs"}>Inputs</LinkComponent>
       {/*  <LinkComponent to={"/forms"}>Forms</LinkComponent> */}
        <LinkComponent to={"/cards"}>Cards</LinkComponent>
        {/*    <LinkComponent to={"/animations"}>Animations</LinkComponent> */}
      </aside>
    </>
  );
}

function LinkComponent({ to, children }) {
  return (
    <Link
      to={to}
      className="flex w-full rounded-2xl px-4 py-1 hover:bg-[var(--primary-600)]"
    >
      {children}
    </Link>
  );
}
