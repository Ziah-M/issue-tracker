import React, { useEffect, useState } from "react";
import { withFirebase } from "../Firebase";
import AuthUserContext from "./context";

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
      //   Prevents UI flicker by setting from local storage while awaiting ASYNC
      setAuthUser(JSON.parse(localStorage.getItem("authUser")));
      props.firebase.onAuthUserListener(
        (user) => setAuthUser(user),
        setAuthUser(null)
      );
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

    useEffect(() => console.log(authUser), [authUser]);

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} authUser={authUser} />
      </AuthUserContext.Provider>
    );
  };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
