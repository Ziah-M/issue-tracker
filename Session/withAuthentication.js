import { AuthUserContext } from "./context";
import React, { useState, useEffect } from "react";
import { withFirebase } from "../Firebase";

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const [listener, setListener] = useState(null);
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
      //   Prevents UI flicker by setting from local storage while awaiting ASYNC
      setAuthUser(JSON.parse(localStorage.getItem("authUser")));

      const next = (mergedAuthUser) => {
        setAuthUser(mergedAuthUser);
      };

      const fallback = () => setAuthUser(null);

      setListener(props.firebase.onAuthUserListener(next, fallback));

      return () => {
        listener();
      };
    }, []);

    useEffect(() => {
      // End session persistence if firebase session is not found
      if (authUser === null) {
        localStorage.removeItem("authUser");
        return;
      }

      // Session persistence if firebase session is active
      const storedAuthUser = localStorage.getItem("authUser");
      const authUserStringified = JSON.stringify(authUser);
      if (storedAuthUser !== authUserStringified) {
        localStorage.setItem("authUser", authUserStringified);
      }
    }, [authUser]);

    return (
      <AuthUserContext.Provider>
        <Component {...props} authUser={authUser} />
      </AuthUserContext.Provider>
    );
  };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
