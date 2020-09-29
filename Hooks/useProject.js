import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";

const useProject = (id) => {
  const [project, setProject] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase.project(id).on("value", (snapshot) => {
      setProject(snapshot.val());
    });

    return () => firebase.project().off();
  }, []);

  return project;
};

export default useProject;
