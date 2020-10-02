import { useCheckForDemo } from "../Session";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./actions";
import * as actionTypes from "./actionTypes";
import usePush from "../Hooks/CRUD/usePush";

const useFirebaseActions = () => {
  const isDemo = useCheckForDemo();

  // FIREBASE CRUD HOOKS
  const push = usePush();

  // ----   THUNKS   ----

  const addTicket = (details) => {
    return (dispatch) => {
      if (isDemo) {
        console.log("DISPATCHING DEMO ADD TICKET");
        dispatch(actions.addTicket(details));
      } else {
        push("tickets", details);
        return;
      }
    };
  };

  const actions = {
    addTicket,
  };

  return actions;
};

export default useFirebaseActions;
