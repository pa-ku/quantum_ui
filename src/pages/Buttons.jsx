import ComponentTemplate from "../components/ComponentTemplate";
import ComponentTitle from "../components/ComponentTitle";
import ActionButton from "../components/buttons/Action_button";
import Slick_button from "../components/buttons/Slick_button";

export default function Buttons() {
  return (
    <>
      <ComponentTitle>Buttons</ComponentTitle>

      <ComponentTemplate title={"Slick"} text={"This button needs the @property from css to animate the colors of the background image. Changing the transition time creates different animations "}>
        <Slick_button />
      </ComponentTemplate>

      <ComponentTemplate
        title={"Action"}
        text={"Simple button with interaction"}
      >
        <ActionButton />
      </ComponentTemplate>

    </>
  );
}
