import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../Firebase";

// Returns ALL children found at (path) in the database

const useChildren = (path) => {
  const [data, setData] = useState({});
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase.ref(path).on("value", (snapshot) => {
      const value = snapshot.val();

      setData(value);
    });

    return () => firebase.ref(path).off();
  }, []);

  return data;
};

export default useChildren;
