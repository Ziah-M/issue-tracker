import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../../Firebase";
import { convertObjectToList } from "../../Helpers";
import { useCheckForDemo } from "../../Session";
import { useDispatch } from "react-redux";

const useUpdate = () => {
  const [updateDetails, setUpdateDetails] = useState({});
  const firebase = useContext(FirebaseContext);
  const isDemo = useCheckForDemo();
  const dispatch = useDispatch();

  const update = ({ path = "", newData = {}, action = (f) => f }) => {
    // FOR DEMO USERS ->
    // path should be a callback function
    // which is sent to dispatch to update local state, without triggering a firebase update
    if (isDemo) {
      dispatch(action(newData));
    } else if (!!path && !!newData) {
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
    console.log("PATH  ", path, "DATA  ", data);

    if (!!path && !!data) {
      firebase.ref(path).update(updateDetails.data);
    }
  }, [updateDetails]);

  return update;
};

export default useUpdate;
