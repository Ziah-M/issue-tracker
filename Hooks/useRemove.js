import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";

const useRemove = () => {
  const [path, setPath] = useState(null);

  const firebase = useContext(FirebaseContext);

  const remove = (path = "") => {
    if (!!path) {
      setPath(path);
    } else {
      console.log("Remove failed: Did not provide a valid path");
    }
  };

  useEffect(() => {
    if (!!path) {
      firebase
        .ref(path)
        .remove()
        .then(() => console.log(`remove successful at ${path}`))
        .catch(() => console.log(`remove failed at ${path}`));
    }
  }, [path]);

  return remove;
};

export default useRemove;
