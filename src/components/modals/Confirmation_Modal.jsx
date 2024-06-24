import React from "react";
import useModal from "../hooks/useModal";
import CodeBlock from "../CodeBlock";

export default function Confirmation_modal() {
  const codeBlock = `<button
  className="rounded-xl bg-secundary-400 px-3 
  py-2 hover:brightness-110">
    Open Modal
</button>

<dialog
ref={refModal}
className="absolute left-0 right-0 
m-auto space-y-6 rounded-xl p-5">
  <p className="text-2xl">You like dulce de leche?</p>
  
  <div className="flex items-center justify-center 
  gap-4 text-xl text-white">
    <button 
    className="w-20 rounded-xl 
    bg-gray-400 px-3 py-2 hover:brightness-110">
      No
    </button>
    <button
    className="w-20 rounded-xl bg-secundary-400 
    px-3 py-2 hover:brightness-110">
      Yes
    </button>
  </div>
</dialog>`;
  const [refModal, openModal, closeModal] = useModal();
  return (
    <>
      <button
        onClick={openModal}
        className="rounded-xl bg-secundary-400 px-3 py-2 hover:brightness-110"
      >
        Open Modal
      </button>
      <dialog
        ref={refModal}
        className="absolute left-0 right-0 m-auto space-y-6 rounded-xl p-5"
      >
        <p className="text-2xl">You like dulce de leche?</p>
        <div className="flex items-center justify-center gap-4 text-xl text-white">
          <button
            onClick={closeModal}
            className="w-20 rounded-xl bg-gray-400 px-3 py-2 hover:brightness-110"
          >
            No
          </button>
          <button
            onClick={closeModal}
            className="w-20 rounded-xl bg-secundary-400 px-3 py-2 hover:brightness-110"
          >
            Yes
          </button>
        </div>
      </dialog>
      <CodeBlock code={codeBlock} />
    </>
  );
}
