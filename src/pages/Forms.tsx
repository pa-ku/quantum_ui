import React from 'react'
import ComponentTitle from '../components/ComponentTitle'
import { FORM_LOGIN, FORM_REGISTER } from '../components/design/form'
import ComponentLayout from '../components/ComponentLayout'

export default function Forms() {
  return (
    <>
      <ComponentTitle>Forms</ComponentTitle>
      <ComponentLayout
        component={FORM_LOGIN}
        title="login"
        description=""
      ></ComponentLayout>
      <ComponentLayout
        component={FORM_REGISTER}
        title="Register"
        description=""
      ></ComponentLayout>
    </>
  )
}
