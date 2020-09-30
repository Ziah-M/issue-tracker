import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";

// Returns SPECIFIC child of (id) found at (path) in the database

const useUpdate = (path = "", newData = {}) => {
  const [updateDetails, setUpdateDetails] = useState({});

  const firebase = useContext(FirebaseContext);

  const update = (path = "", newData = {}) => {
    if (!!path && !!newData) {
      setUpdateDetails({
        path: path,
        data: newData,
      });
    } else {
      console.log("Update failed: Did not provide a valid path or any data");
    }
  };

  useEffect(() => {
    const { path, data } = updateDetails;
    console.log('PATH  ',path,'DATA  ',data)

    if (!!path && !!data) {
      firebase.ref(path).update(updateDetails.data);
    }
  }, [updateDetails]);

  return update;
};

export default useUpdate;
