import ComponentTitle from '../components/ComponentTitle'
import React from 'react'
import {
  INPUT_FILE,
  INPUT_MINIMAL,
  INPUT_MODERN,
  INPUT_SEARCH,
  INPUT_SOUND,
  INPUT_SOUND_CSS,
} from '../components/design/inputs'
import ComponentLayout from '../components/ComponentLayout'
export default function Inputs() {
  return (
    <>
      <ComponentTitle>Inputs</ComponentTitle>
      <ComponentLayout
        component={INPUT_MODERN}
        title="Modern"
        description="Placeholder moves to display de name of the input"
      ></ComponentLayout>

      <ComponentLayout
        component={INPUT_SEARCH}
        title="Search Bar"
        description="Uses Javascript to detect when the imput has content to show Search icon or Close Icon"
      ></ComponentLayout>

      <ComponentLayout
        component={INPUT_MINIMAL}
        description={'Less is more with his imput, does the job'}
        title="Minimal"
      ></ComponentLayout>

      <ComponentLayout
        component={INPUT_SOUND}
        description={''}
        title="Sound"
        css={INPUT_SOUND_CSS}
      ></ComponentLayout>

      <ComponentLayout
        component={INPUT_FILE}
        description={''}
        title="Image"
      ></ComponentLayout>
    </>
  )
}
