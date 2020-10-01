import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FirebaseContext } from "../../Firebase";
import { useCheckForDemo } from "../../Session";

const useSet = () => {
  const [addDetails, setAddDetails] = useState({});
  const firebase = useContext(FirebaseContext);
  const isDemo = useCheckForDemo();
  const dispatch = useDispatch();

  const add = ({ path = "", newData = {}, action = (f) => f }) => {
    // FOR DEMO USERS ->
    // path should be a callback function
    // which is sent to dispatch to update local state, without triggering a firebase update
    if (isDemo) {
      dispatch(action(newData));
    } else if (!!path) {
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
