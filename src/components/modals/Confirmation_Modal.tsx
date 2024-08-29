import React from "react";
import useModal from "../../hooks/useModal";
import CodeBlock from "../CodeBlock";

export default function Confirmation_modal() {
  const codeBlock = `<dialog ref={refModal}
    className="absolute left-0 right-0 m-auto 
    space-y-6 rounded-xl bg-gray-700 p-5">
    <p className="text-2xl text-white">Do you like dulce de leche?</p>
    <div className="flex items-center justify-center gap-4 text-xl text-white">
    <button
    onClick={closeModal}
      className="w-20 rounded-xl bg-gray-500 px-3 py-2 hover:brightness-110">
    No
  </button>
   <button
    onClick={closeModal}
    className="w-20 rounded-xl bg-primary px-3 py-2 hover:brightness-110">
      Yes 
   </button>
  </div>
</dialog>`;
  const [refModal, openModal, closeModal] = useModal();
  return (
    <>
      <button
        onClick={openModal}
        className="rounded-xl bg-primary px-3 py-2 hover:brightness-110"
      >
        Open Modal
      </button>
      <dialog
        ref={refModal}
        className="absolute left-0 right-0 m-auto space-y-6 rounded-xl bg-gray-700 p-5"
      >
        <p className="text-2xl text-white">Do you like dulce de leche?</p>
        <div className="flex items-center justify-center gap-4 text-xl text-white">
          <button
            onClick={closeModal}
            className="w-20 rounded-xl bg-gray-500 px-3 py-2 hover:brightness-110"
          >
            No
          </button>
          <button
            onClick={closeModal}
            className="w-20 rounded-xl bg-primary px-3 py-2 hover:brightness-110"
          >
            Yes
          </button>
        </div>
      </dialog>
      <CodeBlock code={codeBlock} />
    </>
  );
}
