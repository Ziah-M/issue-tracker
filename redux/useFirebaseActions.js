import { useCheckForDemo, useAuthUser } from "../Session";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./actions";
import * as actionTypes from "./actionTypes";
import usePush from "../Hooks/CRUD/usePush";
import useUpdate from "../Hooks/CRUD/useUpdate";
import { useRemove, useSet } from "../Hooks";
import { uuid } from "uuid";

const getTimestamp = () => {
  // returns a timestamp without seconds
  const a = new Date();
  const b = a.toUTCString();
  const pattern = /:\d\d\sGMT/g;
  const pattern2 = /\w\w\w,\s/g;
  const c = b.replace(pattern, "");
  const d = c.replace(pattern2, "");
  return d;
};

const removeFalseyValuesFromObject = (obj) => {
  let updatedData = {};
  Object.keys(obj).map((key) => {
    if (!!obj[key]) {
      updatedData[key] = obj[key];
    }
  });

  return updatedData;
};

const useFirebaseActions = () => {
  const isDemo = useCheckForDemo();
  const authUser = useAuthUser();

  // FIREBASE CRUD HOOKS
  const pushToDb = usePush();
  const updateDb = useUpdate();
  const setInDb = useSet();
  const removeFromDb = useRemove();

  // ----            THUNKS            ----
  // ----            TICKETS            ----
  const addTicket = (data) => {
    return (dispatch, getState) => {
      const ticket = {
        ...data,
        created: getTimestamp(),
        submitter: authUser.name(),
      };

      if (isDemo) {
        console.log("DISPATCHING DEMO ADD TICKET");
        dispatch(actions.addTicket(ticket));
      } else {
        pushToDb("tickets", ticket);
        return;
      }
    };
  };

  const editTicket = (id, data) => {
    return (dispatch, getState) => {
      const updatedData = removeFalseyValuesFromObject(data);

      const ticket = {
        ...updatedData,
        updated: getTimestamp(),
      };

      // History
      const oldProperties = getState().tickets[id];

      if (isDemo) {
        console.log("DISPATCHING DEMO EDIT TICKET");
        dispatch(actions.editTicket(id, ticket));
      } else {
        updateDb(`tickets/${id}`, ticket);

        // PUSH A NEW HISTORY FOR EACH UPDATED PROPERTY
        Object.keys(ticket).map((key) => {
          const history = {
            property: key,
            oldValue: oldProperties[key],
            newValue: ticket[key],
            updated: getTimestamp(),
          };
          if (history.property !== "updated") {
            pushToDb(`tickets/${id}/history`, history);
          }
        });
        return;
      }
    };
  };

  const addTicketComment = (ticketId, comment) => {
    return (dispatch) => {
      const newComment = {
        submitter: authUser.name,
        comment,
        created: getTimestamp(),
      };

      if (isDemo) {
        console.log("DISPATCHING DEMO ADD COMMENT TO TICKET");
        dispatch(actions.addTicketComment(ticketId, newComment));
      } else {
        pushToDb(`tickets/${ticketId}/comments`, newComment);
        return;
      }
    };
  };

  // ----            PROJECTS            ----
  const addProject = (details) => {
    return (dispatch) => {
      if (isDemo) {
        console.log("DISPATCHING DEMO ADD PROJECT");
        dispatch(actions.addProject(details));
      } else {
        pushToDb("projects", details);
        return;
      }
    };
  };

  const editProject = (id, details) => {
    return (dispatch) => {
      if (isDemo) {
        console.log("DISPATCHING DEMO EDIT PROJECT");
        dispatch(actions.editProject(id, details));
      } else {
        updateDb(`projects/${id}`, details);
        return;
      }
    };
  };

  const addProjectUser = (projectId, userId) => {
    return (dispatch) => {
      if (isDemo) {
        console.log("DISPATCHING DEMO ADD PROJECT USER");
        dispatch(actions.addProjectUser(projectId, userId));
      } else {
        setInDb(`projects/${projectId}/personnel/${userId}`);
        return;
      }
    };
  };

  const removeProjectUser = (projectId, userId) => {
    return (dispatch) => {
      if (isDemo) {
        console.log("DISPATCHING DEMO REMOVE PROJECT USER");
        dispatch(actions.removeProjectUser(projectId, userId));
      } else {
        const path = `projects/${projectId}/personnel/${userId}`;
        removeFromDb(path);
        return;
      }
    };
  };

  // ----            USERS            ----

  const editUserRole = (userId, role) => {
    return (dispatch) => {
      console.log("EDIT ROLE:", userId, role);
      if (isDemo) {
        console.log("DISPATCHING DEMO EDIT USER ROLE");
        dispatch(actions.editUserRole(userId));
      } else {
        const path = `users/${userId}`;
        updateDb(path, { role });
        return;
      }
    };
  };

  const actions = {
    addTicket,
    editTicket,
    editProject,
    addProjectUser,
    removeProjectUser,
    editUserRole,
    addProject,
    addTicketComment,
  };

  return actions;
};

export default useFirebaseActions;
