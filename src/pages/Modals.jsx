import ComponentTemplate from "../components/ComponentTemplate";
import Confirmation_modal from "../components/modals/Confirmation_Modal";
import Contact_modal from "../components/modals/Contact_Modal";
import Message_modal from "../components/modals/Message_Modal";

export default function Modals() {
  return (
    <>
      <ComponentTemplate title={"Contant Modal"}>
        <Contact_modal />
      </ComponentTemplate>
      <ComponentTemplate title={"Contant Modal"}>
        <Message_modal />
      </ComponentTemplate>
      <ComponentTemplate title={"Contant Modal"}>
        <Confirmation_modal />
      </ComponentTemplate>
    </>
  );
}
