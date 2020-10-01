// LISTENS FOR UPDATES ON THE DB & UPDATES THE GLOBAL STORE
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  overwriteProjects, overwriteTickets,

  overwriteUsers
} from "../../redux/actions";
import { useCheckForDemo } from "../../Session";

const useFirebaseListener = () => {
  const dispatch = useDispatch();

  const tickets = useSelector((store) => store.tickets);
  const users = useSelector((store) => store.users);
  const projects = useSelector((store) => store.projects);

  const isDemo = useCheckForDemo();

  useEffect(() => {
    if (!isDemo) {
      dispatch(() => overwriteUsers(users));
    }
  }, [users]);

  useEffect(() => {
    if (!isDemo) {
      dispatch(() => overwriteTickets(tickets));
    }
  }, [tickets]);

  useEffect(() => {
    if (!isDemo) {
      dispatch(() => overwriteProjects(projects));
    }
  }, [projects]);
};

export default useFirebaseListener;
