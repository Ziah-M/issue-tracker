import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";

const useSet = () => {
  const [addDetails, setAddDetails] = useState({});

  const firebase = useContext(FirebaseContext);

  const add = (path = "") => {
    if (!!path) {
      setAddDetails({
        path: path,
      });
    } else {
      console.log("Set data failed: Did not provide a valid path");
    }
  };

  useEffect(() => {
    const { path } = addDetails;
    console.log("PATH  ", path);

    if (!!path) {
      firebase
        .ref(path)
        .set(1)
        .then(() => console.log(`set successful at ${path}`))
        .catch(() => console.log(`set failed at ${path}`));
    }
  }, [addDetails]);

  return add;
};

export default useSet;
