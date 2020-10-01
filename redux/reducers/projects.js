import {
  ADD_TICKET,
  EDIT_TICKET,
  OVERWRITE_PROJECTS,
  OVERWRITE_TICKETS,
  TOGGLE_TICKET_ON_PROJECT,
} from "../actionTypes";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TICKET: {
      const { data } = payload;
      return {
        ...state,
        data,
      };
    }
    
    case OVERWRITE_PROJECTS: {
      const { state } = payload;
      return state;
    }
    default:
      return state;
  }
};
