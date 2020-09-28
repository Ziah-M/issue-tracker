import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";

const useProjects = () => {
  const [projects, setProjects] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase.projects().on("value", (snapshot) => {
      setProjects(snapshot.val());
    });

    return () => firebase.projects().off();
  }, []);

  return projects;
};

export default useProjects;
