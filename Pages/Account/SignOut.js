import React from "react";
import { withFirebase } from "../../Firebase";
import { Button } from "react-bootstrap";

const SignOutButton = ({ firebase }) => {
  return (
    <Button size="sm" onClick={() => firebase.doSignOut} variant="danger">
      Sign Out
    </Button>
  );
};

export default withFirebase(SignOutButton);
