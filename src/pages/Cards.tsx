import ComponentTemplate from '../components/ComponentTemplate'
import ComponentTitle from '../components/ComponentTitle'
import Accent_card from '../components/cards/Accent_card'
import Product_card from '../components/cards/Product_card'
import React from 'react'
import Showcase_card from '../components/cards/Showcase_card'

export default function Cards() {
  return (
    <>
      <ComponentTitle>Cards</ComponentTitle>
      <div className="wrapper">
        <ComponentTemplate
          title={'Accent'}
          description={
            "Changing 'mix-blend' to darken or dark-light makes the logo interact in different ways with the background."
          }
        >
          <Accent_card />
        </ComponentTemplate>

        <ComponentTemplate
          title={'Product'}
          description={
            'Showcasing the selling item, you have the option to automaticly calculate the discount label.'
          }
        >
          <Product_card />
        </ComponentTemplate>

        <ComponentTemplate
          title={'Showcase'}
          description={'Minimalistic Card with key information'}
        >
          <Showcase_card />
        </ComponentTemplate>
      </div>
    </>
  )
}
