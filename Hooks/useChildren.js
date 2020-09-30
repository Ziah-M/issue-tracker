import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";
import { convertObjectToList } from "../Helpers";

// Returns ALL children found at (path) in the database

const useChildren = (path) => {
  const [data, setData] = useState({ data: [], dataAsObject: {} });
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase.ref(path).on("value", (snapshot) => {
      const value = snapshot.val();

      setData({
        data: convertObjectToList(value),
        dataAsObject: value,
      });
    });

    return () => firebase.ref(path).off();
  }, []);

  return data;
};

export default useChildren;
