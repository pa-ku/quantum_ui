import ComponentTemplate from "../components/ComponentTemplate";
import Button_1 from "../components/buttons/ActionBtn";
import ChromaBtn from "../components/buttons/ChromaBtn";

export default function Buttons() {
  return (
    <>
      <div className="wrapper">
        <ComponentTemplate
          title={"Press"}
          text={"Simple button with interaction"}
        >
          <Button_1 />
        </ComponentTemplate>
        <ComponentTemplate
          title={"Chroma Button"}
          text={"Needs the chroma keyframes to work"}
        >
          <ChromaBtn />
        </ComponentTemplate>
      </div>
    </>
  );
}
