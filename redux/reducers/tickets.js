import {
  ADD_TICKET,
  ADD_TICKET_COMMENT,
  EDIT_TICKET,
  OVERWRITE_TICKETS,
} from '../actionTypes'

import { ticketsInitialState } from '../initialState'
import uuid from 'uuid'

const INITIAL_STATE = ticketsInitialState

export default (state = INITIAL_STATE, action) => {
  const { type, payload = {}, id } = action

  switch (type) {
    case ADD_TICKET: {
      return {
        ...state,
        [id]: { ...payload },
      }
    }

    case EDIT_TICKET: {
      return {
        ...state,
        [id]: {
          ...state[id],
          ...payload,
        },
      }
    }

    case ADD_TICKET_COMMENT: {
      return {
        ...state,
        [id]: {
          ...state[id],
          comments: {
            ...state[id].comments,
            [uuid()]: { ...payload },
          },
        },
      }
    }

    case OVERWRITE_TICKETS: {
      return {
        ...payload,
      }
    }
    default:
      return state
  }
}
