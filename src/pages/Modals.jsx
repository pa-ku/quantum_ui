import CodeBlock from "../components/CodeBlock";
import ComponentDescription from "../components/ComponentDescription";
import ComponentTemplate from "../components/ComponentTemplate";
import useModal from "../components/hooks/useModal";
import Confirmation_modal from "../components/modals/Confirmation_Modal";
import Contact_modal from "../components/modals/Contact_Modal";
import Message_modal from "../components/modals/Message_Modal";

export default function Modals() {
  const [refModal, openModal, closeModal] = useModal();
  const codeBlock = `import { useRef } from "react"

export default function useModal() {
  const refModal = useRef(null)

function openModal() {
    refModal.current.showModal()
  }
function closeModal() {
    refModal.current.close()
  }

   return [refModal, openModal, closeModal]
}`;
  return (
    <>
      <ComponentDescription>
        Implementing modals in React is easy using this handy Hook
        <button
          onClick={openModal}
          className="px-1 text-primary-200 hover:brightness-125"
        >
          useModal
        </button>
        <dialog
          ref={refModal}
          className="bg-dark-200 absolute w-full rounded-xl p-5 text-start text-white"
        >
          <h2 className="text-start">UseModal</h2>
          <p className="py-3">
            Add the <span className="text-primary-200">refModal</span> to the
            dialog component ej {"ref=( refModal )"}
          </p>
          <p className="py-3">
            Use the <span className="text-primary-200">openModal</span> function
            in a button to manage the sowModal state
          </p>
          <p className="py-3">
            <span className="text-primary-200">closeModal</span> can be used in
            multiple buttons
          </p>
          <CodeBlock code={codeBlock} />
          <button
            onClick={closeModal}
            className="my-5 w-full rounded-xl bg-secundary-800 p-2"
          >
            CLOSE
          </button>
        </dialog>
      </ComponentDescription>
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
