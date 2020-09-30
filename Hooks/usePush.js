import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";

const usePush = (path = "", newData = {}) => {
  const [addDetails, setAddDetails] = useState({});

  const firebase = useContext(FirebaseContext);

  const add = (path = "", newData = {}) => {
    if (!!path && !!newData) {
      setAddDetails({
        path: path,
        data: newData,
      });
    } else {
      console.log("Add data failed: Did not provide a valid path or any data");
    }
  };

  useEffect(() => {
    const { path, data } = addDetails;
    console.log("PATH  ", path, "DATA  ", data);

    if (!!path && !!data) {
      firebase.ref(path).push(addDetails.data);
    }
  }, [addDetails]);

  return add;
};

export default usePush;