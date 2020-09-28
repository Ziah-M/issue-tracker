import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../routes";
import AuthUserContext from "./context";

// condition is a callback function defined like:
// authUser => !!authUser
// authUser => !!authUser && !!authUser.role && authUser.role === 'ADMIN'
// authUser => !!authUser && !!authUser.permissions && !!authUser.permissions.canEditAccount

const withAuthorization = (condition) => (Component) => {
  const WithAuthorization = (props) => {
    const history = useHistory();

    // If firebase auth changes, check condition again to force re-direct

    useEffect(() => {
      const next = (mergedAuthUser) => {
        if (!condition(mergedAuthUser)) {
          history.push(ROUTES.SIGN_IN);
        }
      };

      // Fallback is called if authUser is null
      const fallback = () => history.push(ROUTES.SIGN_IN);

      props.firebase.onAuthUserListener(next, fallback);
    }, []);

    return (
      <AuthUserContext.Consumer>
        {(authUser) =>
          condition(authUser) ? (
            <Component {...props} authUser={authUser} />
          ) : null
        }
      </AuthUserContext.Consumer>
    );
  };

  return withFirebase(WithAuthorization);
};

export default withAuthorization;
