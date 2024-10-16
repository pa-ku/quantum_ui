import React from 'react'
import ComponentTitle from '../components/ComponentTitle'
import {
  CHECK_ACTIVE,
  CHECK_HEARTH,
  CHECK_PLUS,
  CHECK_THEME,
  CHECK_TOGGLE,
} from '../components/design/checkbox'
import ComponentLayout from '../components/ComponentLayout'
export default function CheckBoxes() {
  return (
    <>
      <ComponentTitle
        description={
          ' All the inputs uses the Type Checkbox,hidding the default style with ::before. Mantaining all the benefits from the vanilla input'
        }
      >
        CheckBoxes
      </ComponentTitle>

      <ComponentLayout
        component={CHECK_ACTIVE}
        title="Active"
        description="Showcasing the selling item, you have the option to automaticly calculate the discount label."
      ></ComponentLayout>
      <ComponentLayout
        component={CHECK_HEARTH}
        title="Favorite"
        description="Minimalistic Add to favourites Button."
      ></ComponentLayout>
      <ComponentLayout
        component={CHECK_PLUS}
        title="Plus"
        description="Used for clossing tags, or expansive containers."
      ></ComponentLayout>
      <ComponentLayout
        component={CHECK_THEME}
        title="Theme"
        description="Showcasing the selling item, you have the option to automaticly calculate the discount label."
      ></ComponentLayout>

      <ComponentLayout
        component={CHECK_TOGGLE}
        title="Toggle"
        description="Showcasing the selling item, you have the option to automaticly calculate the discount label."
      ></ComponentLayout>
    </>
  )
}
