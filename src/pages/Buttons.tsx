import React from 'react'
import ComponentLayout from '../components/ComponentLayout'
import ComponentTitle from '../components/ComponentTitle'
import {
  BUTTON_ACTION,
  BUTTON_GLOW,
  BUTTON_MINIMAL,
  BUTTON_NEON,
  BUTTON_SLICK,
  BUTTON_SLICK_CSS,
} from '../components/design/buttons'

export default function Buttons() {
  return (
    <>
      <ComponentTitle>Buttons</ComponentTitle>
      <ComponentLayout
        component={BUTTON_MINIMAL}
        title="Minimal"
        description=""
      ></ComponentLayout>
      <ComponentLayout
        component={BUTTON_GLOW}
        title="Glow"
        description=""
      ></ComponentLayout>
      <ComponentLayout
        component={BUTTON_SLICK}
        title="Slick"
        description="This button needs the @property from css to animate the colors of the background image. Changing the transition time creates different animations"
        css={BUTTON_SLICK_CSS}
      ></ComponentLayout>
      <ComponentLayout
        component={BUTTON_NEON}
        title="Neon"
        description=""
      ></ComponentLayout>

      <ComponentLayout
        component={BUTTON_ACTION}
        title="Action"
        description=""
      ></ComponentLayout>
    </>
  )
}
