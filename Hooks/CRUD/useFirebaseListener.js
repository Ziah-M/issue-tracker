// LISTENS FOR UPDATES ON THE DB & UPDATES THE GLOBAL STORE
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  overwriteProjects,
  overwriteTickets,
  overwriteUsers,
} from "../../redux/actions";
import { useCheckForDemo } from "../../Session";
import useChildren from "./useChildren";

const useFirebaseListener = () => {
  const dispatch = useDispatch();

  const users = useChildren("users");
  const tickets = useChildren("tickets");
  const projects = useChildren("projects");

  const isDemo = useCheckForDemo();

  useEffect(() => {
    if (!isDemo && !!users) {
      dispatch(overwriteUsers(users));
    }
  }, [users, []]);

  useEffect(() => {
    if (!isDemo && !!tickets) {
      dispatch(overwriteTickets(tickets));
    }
  }, [tickets, []]);

  useEffect(() => {
    if (!isDemo && !!projects) {
      dispatch(overwriteProjects(projects));
    }
  }, [projects, []]);
};

export default useFirebaseListener;
