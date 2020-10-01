import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../Firebase";

// Returns ALL children found at (path/id/nestedPath) in the database

const useNestedChildren = (path = "", id = "", nestedPath = "") => {
  const [data, setData] = useState({});
  const firebase = useContext(FirebaseContext);

  const fullPath = `${path}/${id}/${nestedPath}`;

  useEffect(() => {
    firebase.ref(fullPath).on("value", (snapshot) => {
      const value = snapshot.val();
      const data = { ...value };

      setData(data);
    });

    return () => firebase.ref(fullPath).off();
  }, []);

  return data;
};

export default useNestedChildren;
