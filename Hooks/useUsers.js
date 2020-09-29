import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";

const useUsers = () => {
  const [users, setUsers] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase.users().on("value", (snapshot) => {
      setUsers(snapshot.val());
    });

    return () => firebase.users().off();
  }, []);

  return users;
};

export default useUsers;
