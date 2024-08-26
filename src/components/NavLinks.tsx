import React from 'react'
import { LinkButton } from './ui/LinkButton'
export default function NavLinks() {
  return (
    <>
      <LinkButton to={'/cards'}>Cards</LinkButton>
      <LinkButton to={'/buttons'}>Buttons</LinkButton>
      <LinkButton to={'/checkboxes'}>Checkboxes</LinkButton>
      <LinkButton to={'/inputs'}>Inputs</LinkButton>
      <LinkButton to={'/modals'}>Modals</LinkButton>
      <LinkButton to={'/animations'}>Animations</LinkButton>
      {/*<LinkButton to={"/forms"}>Forms</LinkButton> */}
    </>
  )
}
