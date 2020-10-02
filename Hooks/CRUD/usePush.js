import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FirebaseContext } from "../../Firebase";
import { useCheckForDemo } from "../../Session";

const usePush = () => {
  const [addDetails, setAddDetails] = useState({});
  const firebase = useContext(FirebaseContext);
  const isDemo = useCheckForDemo();
  const dispatch = useDispatch();

  const add = (path = "", newData = {}, action = (f) => f ) => {
    console.log("ABOUT TO TRIGGER FIREBASE PUSH",newData)
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
