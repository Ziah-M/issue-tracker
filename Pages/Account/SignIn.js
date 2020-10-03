import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../../routes'
import { withFirebase } from '../../Firebase'
import { compose } from 'recompose'
import { SignUpLink } from './SignUpForm'
import { PasswordForgotLink } from './ForgotPassword'
import SignOutButton from './SignOut'
import { Button } from 'react-bootstrap'
import { useAuthUser } from '../../Session'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential'

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
this social account already exists. Try to login from
this account instead and associate your social accounts on
your personal account page.
  `

const SignInPage = () => {
  const { authUser, setAuthUser } = useAuthUser()
  const handleSignInAsDemo = () => {
    localStorage.setItem('auth-demoIsActive', 'true')
    setAuthUser({
      email: 'DEMO@my-portfolio.web.app',
      name: 'DEMO_ADMIN',
      role: 'DEMO',
    })
  }

  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm />
      <SignInGoogle />
      <PasswordForgotLink />
      <SignUpLink />
      <SignOutButton />
      <Button variant="success" onClick={handleSignInAsDemo}>
        SIGN IN AS DEMO
      </Button>
    </div>
  )
}

class SignInFormBase extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const { email, password } = this.state
    this.props.firebase // Provided by withFirebase HOC
      .doSignInWithEmailAndPassword(email, password)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push(ROUTES.LANDING) // Uses withRouter HOC
      })
      .catch((error) => this.setState({ error }))

    event.preventDefault()
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value, // Computed property name to make this method reusable for multiple onChange events
    })
  }

  render() {
    const { email, password, error } = this.state

    const isInvalid = password === '' || email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.onChange}
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.onChange}
          placeholder="Password"
        />
        <button type="submit" disabled={isInvalid}>
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
    }
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        })
      })
      .then(() => {
        this.setState({ error: null })
        this.props.history.push(ROUTES.HOME)
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          // display customer error message
          error.message = ERROR_MSG_ACCOUNT_EXISTS
        }

        this.setState({ error })
      })

    event.preventDefault()
  }

  render() {
    const { error } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit"> Sign In with Google</button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

// Creating HOC
const SignInForm = compose(withRouter, withFirebase)(SignInFormBase)
const SignInGoogle = compose(withRouter, withFirebase)(SignInGoogleBase)

export default SignInPage
export { SignInForm, SignInGoogle }
