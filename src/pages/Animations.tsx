import React from 'react'
import Chroma_anim from '../components/animations/Chroma_anim'
import Opacity_anim from '../components/animations/Opacity_anim'
import ComponentTemplate from '../components/ComponentTemplate'
import Glow_anim from '../components/animations/Glow_anim'
import ComponentTitle from '../components/ComponentTitle'

export default function Animations() {
  return (
    <>
      <ComponentTitle>Animations</ComponentTitle>
      <ComponentTemplate title={'Chroma'}>
        <Chroma_anim />
      </ComponentTemplate>

      <ComponentTemplate
        description={'Minimal animation to show an element'}
        title={'Opacity'}
      >
        <Opacity_anim />
      </ComponentTemplate>

      <ComponentTemplate title={'Glow'}>
        <Glow_anim />
      </ComponentTemplate>
    </>
  )
}
