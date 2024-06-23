import MinimalInput from "../components/inputs/Minimal_Input";
import InputSearch from "../components/inputs/Search_input";
import ComponentTemplate from "../components/ComponentTemplate";
import ComponentTitle from "../components/ComponentTitle";
import Modern_input from "../components/inputs/Modern_input";
export default function Inputs() {
  return (
    <>
      <ComponentTitle>Inputs</ComponentTitle>

      <ComponentTemplate
        title={"Modern"}
        text={"Placeholder moves to display de name of the input"}
      >
        <Modern_input />
      </ComponentTemplate>
      <ComponentTemplate
        title={"Search Bar"}
        text={
          "Uses Javascript to detect when the imput has content to show Search icon or Close Icon"
        }
      >
        <InputSearch />
      </ComponentTemplate>
      <ComponentTemplate
        text={"Less is more with his imput, does the job"}
        title={"Minimal"}
      >
        <MinimalInput />
      </ComponentTemplate>
    </>
  );
}
