import { useRef, MutableRefObject } from 'react'

export default function useModal(): [
  MutableRefObject<HTMLDialogElement | null>,
  () => void,
  () => void,
] {
  const refModal = useRef<HTMLDialogElement | null>(null)

  function openModal(): void {
    refModal.current?.showModal()
  }

  function closeModal(): void {
    refModal.current?.close()
  }

  return [refModal, openModal, closeModal]
}
