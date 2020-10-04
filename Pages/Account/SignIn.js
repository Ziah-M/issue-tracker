import React, { Component, useState } from 'react'
import { withRouter, Link, useHistory } from 'react-router-dom'
import * as ROUTES from '../../routes'
import { useFirebase, withFirebase } from '../../Firebase'
import { compose } from 'recompose'
import { SignUpLink } from './SignUpForm'
import { PasswordForgotLink } from './ForgotPassword'
import SignOutButton from './SignOut'
import { useAuthUser } from '../../Session'
import { Form, Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential'

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
this social account already exists. Try to login from
this account instead and associate your social accounts on
your personal account page.
  `

const SignInPage = () => {
  return (
    <Wrapper>
      <SignInForm />
    </Wrapper>
  )
}

const SignInForm = () => {
  const { authUser, setAuthUser } = useAuthUser()
  const firebase = useFirebase()
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSignInAsDemo = () => {
    localStorage.setItem('auth-demoIsActive', 'true')
    setAuthUser({
      email: 'DEMO@my-portfolio.web.app',
      name: 'DEMO_ADMIN',
      role: 'DEMO',
    })
    history.push(ROUTES.LANDING)
  }

  const handleSignInWithGoogle = () => {
    firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        console.log('RETURNED GOOGLE AUTH USER', socialAuthUser)
      })
      .then(() => {
        setError(null)
        history.push(ROUTES.LANDING)
      })
      .catch((responseError) => {
        if (responseError.code === ERROR_CODE_ACCOUNT_EXISTS) {
          responseError.message = ERROR_MSG_ACCOUNT_EXISTS
        }

        setError(responseError)
      })
  }

  const handleSignInWithEmail = (event) => {
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((response) => {
        setPassword('')
        setEmail('')
        history.push(ROUTES.LANDING)
      })
      .catch((responseError) => setError(responseError))

    event.preventDefault()
  }

  const onChange = (event) => {
    const { name, value } = event.target
    if (name === 'emailField') {
      setEmail(value)
    }

    if (name === 'passwordField') {
      setPassword(value)
    }
  }

  return (
    <Form
      style={{ width: '300px', padding: '40px' }}
      onSubmit={handleSignInWithEmail}
    >
      <FormTitle>
        <FontAwesomeIcon icon={faBug} />
        &nbsp;Bug Tracker Login
      </FormTitle>
      <Form.Group>
        <Form.Control
          type="email"
          name="emailField"
          placeholder="email"
          value={email}
          onChange={(event) => onChange(event)}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="password"
          name="passwordField"
          placeholder="password"
          onChange={(event) => onChange(event)}
          value={password}
        ></Form.Control>
      </Form.Group>
      <Button variant="success" onClick={handleSignInAsDemo} block>
        SIGN IN AS DEMO ADMIN
      </Button>
      <Button block type="submit" variant="primary" disabled>
        SIGN IN
      </Button>
      <Button
        variant="secondary"
        block
        onClick={handleSignInWithGoogle}
        disabled
      >
        Sign In with Google
      </Button>
      <Row className="justify-content-center mt-4 mb-1">
        Forgot your&nbsp;
        <Link to={false && ROUTES.FORGOT_PASSWORD}>Password?</Link>
      </Row>
      <Row className="justify-content-center mb-4">
        Create an Account?&nbsp;
        <Link to={false && ROUTES.SIGN_UP}>Sign Up</Link>
      </Row>
    </Form>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormTitle = styled.div`
  width: 100%;
  font-size: 24px;
  color: gray;
  text-align: center;
  margin-bottom: 30px;
`

export default SignInPage
export { SignInForm, SignInPage }
