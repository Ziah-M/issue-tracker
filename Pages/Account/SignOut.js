import React from 'react'
import { Button } from 'react-bootstrap'
import { withFirebase } from '../../Firebase'

const SignOutButton = ({ firebase }) => (
  <Button size="sm" onClick={() => firebase.doSignOut} variant="danger">
    Sign Out
  </Button>
)

export default withFirebase(SignOutButton)
