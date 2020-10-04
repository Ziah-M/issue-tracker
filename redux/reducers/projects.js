import {
  ADD_PROJECT,
  EDIT_PROJECT,
  ADD_PROJECT_USER,
  REMOVE_PROJECT_USER,
  OVERWRITE_PROJECTS,
} from '../actionTypes'

import { projectsInitialState } from '../initialState'

import { convertObjectToList } from '../../Helpers'
import uuid from 'uuid'

const INITIAL_STATE = projectsInitialState

export default (state = INITIAL_STATE, action) => {
  const { type, payload, id, projectUserId } = action

  switch (type) {
    case ADD_PROJECT: {
      return {
        ...state,
        [uuid()]: {
          ...payload,
        },
      }
    }

    case EDIT_PROJECT: {
      return {
        ...state,
        [id]: {
          ...state[id],
          ...payload,
        },
      }
    }

    case ADD_PROJECT_USER: {
      return {
        ...state,
        [id]: {
          ...state[id],
          personnel: {
            ...state[id].personnel,
            [projectUserId]: true,
          },
        },
      }
    }

    case REMOVE_PROJECT_USER: {
      const { [projectUserId]: removed, ...rest } = state[id].personnel
      console.log('REMOVED', removed, 'REST', rest)
      return {
        ...state,
        [id]: {
          ...state[id],
          personnel: {
            ...rest,
          },
        },
      }
    }

    case OVERWRITE_PROJECTS: {
      return {
        ...payload,
      }
    }
    default:
      return state
  }
}
