import React from 'react'
import ComponentTitle from '../components/ComponentTitle'
import ComponentTemplate from '../components/ComponentTemplate'
import LoginForm from '../components/forms/LoginForm'
import RegisterForm from '../components/forms/RegisterForm'
export default function Forms() {
  return (
    <>
      <ComponentTitle>Forms</ComponentTitle>
      <ComponentTemplate title="Login">
        <LoginForm></LoginForm>
      </ComponentTemplate>
      <ComponentTemplate title="Register">
        <RegisterForm></RegisterForm>
      </ComponentTemplate>
    </>
  )
}
