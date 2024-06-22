import NavLinks from "./NavLinks";

export default function SideBar() {
  return (
    <>
      <aside
        className={`fixed top-0 z-20 hidden h-svh w-52 flex-col gap-5 rounded-none bg-[var(--dark-200)] px-3 py-5 text-lg text-white opacity-95 md:flex`}
      >

        <NavLinks />
      </aside>
    </>
  );
}
