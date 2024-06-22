import { useNavigate } from "react-router-dom";
export default function NavLinks() {
  return (
    <>
      <LinkComponent to={"/buttons"}>Buttons</LinkComponent>
      <LinkComponent to={"/checkboxes"}>Checkboxes</LinkComponent>
      <LinkComponent to={"/inputs"}>Inputs</LinkComponent>
      {/*<LinkComponent to={"/forms"}>Forms</LinkComponent> */}
      <LinkComponent to={"/cards"}>Cards</LinkComponent>
      <LinkComponent to={"/modals"}>Modals</LinkComponent>
      
      <LinkComponent to={"/animations"}>Animations</LinkComponent>
    </>
  );
}

export function LinkComponent({ to, children }) {
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
