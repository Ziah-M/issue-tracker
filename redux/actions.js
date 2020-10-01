import {
  ADD_PROJECT,
  ADD_TICKET,
  EDIT_TICKET,
  EDIT_USER_ROLE,
  TOGGLE_USER_ON_PROJECT,
  OVERWRITE_PROJECTS,
  OVERWRITE_USERS,
  OVERWRITE_TICKETS,
} from "./actionTypes";

const addProject = (details = {}) => ({
  type: ADD_PROJECT,
  payload: { details },
});

export const addTicket = (details) => ({
  type: ADD_TICKET,
  payload: { details },
});

export const editTicket = (updated) => ({
  type: EDIT_TICKET,
  payload: { updated },
});

export const editUserRole = (userId, role) => ({
  type: EDIT_USER_ROLE,
  payload: { userId, role },
});

export const toggleUserOnProject = (userId, projectId) => ({
  type: TOGGLE_USER_ON_PROJECT,
  payload: { userId, projectId },
});

export const overwriteProjects = (state) => ({
  type: OVERWRITE_PROJECTS,
  payload: { state },
});

export const overwriteUsers = (state) => ({
  type: OVERWRITE_USERS,
  payload: { state },
});

export const overwriteTickets = (state) => ({
  type: OVERWRITE_TICKETS,
  payload: { state },
});
