import React from 'react'
import ComponentTitle from '../components/ComponentTitle'
import ComponentLayout from '../components/ComponentLayout'
import {
  ANIMATE_CHROMA_CSS,
  ANIMATE_GLOW_CSS,
  ANIMATE_OPACITY_CSS,
} from '../components/design/animations'

export default function Animations() {
  return (
    <>
      <ComponentTitle>Animations</ComponentTitle>
      <ComponentLayout
        component={
          <div className="animate-chroma h-20 w-20 rounded-xl bg-primary-300"></div>
        }
        css={ANIMATE_CHROMA_CSS}
        title="Chroma"
        description=""
      ></ComponentLayout>

      <ComponentLayout
        component={
          <div className="opacity h-20 w-20 rounded-xl bg-primary"></div>
        }
        css={ANIMATE_OPACITY_CSS}
        description={'Minimal animation to show an element'}
        title={'Opacity'}
      ></ComponentLayout>

      <ComponentLayout
        component={
          <div className="animate-chroma h-20 w-20 rounded-xl bg-primary-300"></div>
        }
        css={ANIMATE_GLOW_CSS}
        title="Glow"
        description=""
      ></ComponentLayout>
    </>
  )
}
