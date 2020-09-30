import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";
import { convertObjectToList } from "../Helpers";

// Returns ALL children found at (path/id/nestedPath) in the database

const useNestedChildren = (path = "", id = "", nestedPath = "") => {
  const [data, setData] = useState({ data: [], dataAsObject: {} });
  const firebase = useContext(FirebaseContext);

  const fullPath = `${path}/${id}/${nestedPath}`;

  useEffect(() => {
    firebase.ref(fullPath).on("value", (snapshot) => {
      const value = snapshot.val();

      setData({
        data: convertObjectToList(value),
        dataAsObject: value,
      });
    });

    return () => firebase.ref(fullPath).off();
  }, []);

  return data;
};

export default useNestedChildren;
