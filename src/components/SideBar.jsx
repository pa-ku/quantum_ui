import { Link } from "react-router-dom";

export default function SideBar({ sideBar }) {
  return (
    <>
      <aside
        className={`${sideBar && "left-0"} items-star to-[var(--primary-600) md:rounded-non fixed -left-full top-20 z-50 flex h-svh w-52 flex-col gap-5 rounded-tr-lg bg-[var(--primary-700)] bg-gradient-to-tr from-[var(--primary-800)] px-2 py-5 text-lg text-white opacity-95 duration-300 md:sticky md:top-0 md:flex`}
      >
        <LinkComponent to={"/buttons"}>Buttons</LinkComponent>

        <LinkComponent to={"/checkboxes"}>Checkboxes</LinkComponent>
        <LinkComponent to={"/inputs"}>Inputs</LinkComponent>
        {/*  <LinkComponent to={"/forms"}>Forms</LinkComponent> */}
        <LinkComponent to={"/cards"}>Cards</LinkComponent>
        {/*      <LinkComponent to={"/animations"}>Animations</LinkComponent> */}
      </aside>
    </>
  );
}

function LinkComponent({ to, children }) {
  return (
    <>
      <div>
        <Link
          to={to}
          defaultChecked={true}
          className="flex w-full rounded-2xl px-4 py-1 duration-500 hover:bg-[var(--primary-600)]"
        >
          {children}
        </Link>
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
