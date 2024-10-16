import ComponentTemplate from '../components/ComponentTemplate'
import ComponentTitle from '../components/ComponentTitle'
import BorderGlow from '../components/buttons/BorderGlow_button'
import Neon from '../components/buttons/Neon.button'
import Slick_button from '../components/buttons/Slick_button'
import React from 'react'
export default function Buttons() {
  return (
    <>
      <ComponentTitle>Buttons</ComponentTitle>
      <Neon />
      <Slick_button />
      <BorderGlow />
    </>
  )
}
