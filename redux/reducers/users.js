import { EDIT_USER_ROLE, OVERWRITE_USERS } from '../actionTypes'

import { usersInitialState } from '../initialState'

const INITIAL_STATE = usersInitialState

export default (state = INITIAL_STATE, action) => {
  const { type, payload, id } = action

  switch (type) {
    case EDIT_USER_ROLE: {
      return {
        ...state,
        [id]: {
          ...state[id],
          ...payload,
        },
      }
    }

    case OVERWRITE_USERS: {
      return {
        ...payload,
      }
    }
    default:
      return state
  }
}
