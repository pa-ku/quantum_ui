import ComponentTemplate from '../components/ComponentTemplate'
import ComponentTitle from '../components/ComponentTitle'
import Accent_card from '../components/cards/Accent_card'
import Product_card from '../components/cards/Product_card'
import React from 'react'
import Showcase_card from '../components/cards/Showcase_card'
import ComponentLayout from '../components/ComponentLayout'
import {
  CARD_ACCENT,
  CARD_ACCENT_CSS,
  CARD_PRODUCT,
  CARD_SHOWCASE,
} from '../components/design/cards'

export default function Cards() {
  return (
    <>
      <ComponentTitle>Cards</ComponentTitle>

      <ComponentLayout
        component={CARD_PRODUCT}
        title="Product"
        description="Showcasing the selling item, you have the option to automaticly calculate the discount label."
      ></ComponentLayout>

      <ComponentLayout
        component={CARD_SHOWCASE}
        title="Showcase"
        description="Minimalistic Card with key information"
      ></ComponentLayout>
      <ComponentLayout
        component={CARD_ACCENT}
        css={CARD_ACCENT_CSS}
        title="Accent"
        description="Changing 'mix-blend' to darken or dark-light makes the logo interact in different ways with the background."
      ></ComponentLayout>
    </>
  )
}
