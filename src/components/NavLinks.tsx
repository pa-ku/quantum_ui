import React from 'react'
import { LinkButton } from './ui/LinkButton'
export default function NavLinks() {
  return (
    <>
      <LinkButton to={'/buttons'}>Buttons</LinkButton>
      <LinkButton to={'/inputs'}>Inputs</LinkButton>
      <LinkButton to={'/checkboxes'}>Checkboxes</LinkButton>
      <LinkButton to={'/cards'}>Cards</LinkButton>
      <LinkButton to={"/forms"}>Forms</LinkButton> 
      <LinkButton to={'/modals'}>Modals</LinkButton>
      <LinkButton to={'/animations'}>Animations</LinkButton>
    </>
  )
}
