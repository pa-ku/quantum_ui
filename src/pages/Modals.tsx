import CodeBlock from '../components/CodeBlock'
import ComponentTemplate from '../components/ComponentTemplate'
import ComponentTitle from '../components/ComponentTitle'
import useModal from '../hooks/useModal'
import Confirmation_modal from '../components/modals/Confirmation_Modal'
import Contact_modal from '../components/modals/Contact_Modal'
import Message_modal from '../components/modals/Message_Modal'
import React from 'react'

export default function Modals() {
  const [refModal, openModal, closeModal] = useModal()
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
}`
  return (
    <>
      <ComponentTitle
        description={
          <>
            Implementing modals in React is easy using this handy Hook
            <button
              onClick={openModal}
              className="px-1 text-primary-200 hover:brightness-125"
            >
              useModal
            </button>
            <dialog
              ref={refModal}
              className="m-auto rounded-xl bg-dark-200 p-5 text-start text-sm text-white md:w-[50em] md:p-7 md:text-base"
            >
              <h2 className="text-start text-3xl font-bold">UseModal</h2>

              <p className="py-1">
                Add the <span className="text-primary-200">refModal</span> to
                the dialog component
              </p>
              <p className="py-1">
                Use the <span className="text-primary-200">openModal</span>{' '}
                function in a button to manage the showModal state
              </p>

              <CodeBlock code={codeBlock} />
              <button
                onClick={closeModal}
                className="mt-5 w-full rounded-xl bg-secundary-800 p-2 hover:brightness-110"
              >
                CLOSE
              </button>
            </dialog>
          </>
        }
      >
        Modals
      </ComponentTitle>

      {/*  <ComponentTemplate title={"Contant Modal"}>
        <Contact_modal />
      </ComponentTemplate>
      <ComponentTemplate title={"Message Modal"}>
        <Message_modal />
      </ComponentTemplate> */}
      <ComponentTemplate
        description={'Minimalistic Confirm o negate modal with two buttons'}
        title={'Confirmation'}
      >
        <Confirmation_modal />
      </ComponentTemplate>
    </>
  )
}
