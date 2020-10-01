import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FirebaseContext } from "../../Firebase";
import { useCheckForDemo } from "../../Session";

const useRemove = () => {
  const [path, setPath] = useState(null);
  const firebase = useContext(FirebaseContext);
  const isDemo = useCheckForDemo();
  const dispatch = useDispatch();

  const remove = ({ path = "", action = (f) => f }) => {
    // FOR DEMO USERS ->
    // path should be a callback function
    // which is sent to dispatch to update local state, without triggering a firebase update
    if (isDemo) {
      dispatch(action());
    } else if (!!path) {
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
