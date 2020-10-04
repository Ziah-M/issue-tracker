import uuid from 'uuid'
import ReduxThunk from 'redux-thunk'
import {
  ADD_PROJECT,
  ADD_TICKET,
  EDIT_TICKET,
  EDIT_USER_ROLE,
  OVERWRITE_PROJECTS,
  OVERWRITE_USERS,
  OVERWRITE_TICKETS,
  ADD_PROJECT_USER,
  ADD_TICKET_COMMENT,
  EDIT_PROJECT,
  REMOVE_PROJECT_USER,
} from './actionTypes'
import { getTimestamp, removeFalseyValuesFromObject } from '../Helpers'

//    ----   TICKETS   ----

export const addTicket = (data) => ({
  type: ADD_TICKET,
  payload: { ...data },
  id: uuid(),
})

export const editTicket = (id, data) => ({
  type: EDIT_TICKET,
  payload: { ...data },
  id,
})

export const editTicketWithHistory = (id, data) => (dispatch, getState) => {
  const { oldHistory } = getState().tickets[id].history || {}
  const { oldProperties } = getState().ticketsp[id] || {}

  const newHistory = {}
  Object.keys(data).map((key) => {
    if (key !== 'updated') {
      newHistory[uuid()] = {
        newValue: data[key],
        oldValue: oldProperties[key],
        property: key,
        updated: getTimestamp(),
      }
    }
  })

  const history = { ...oldHistory, ...newHistory }

  const ticket = { ...data, ...history }

  dispatch(editTicket(id, ticket))
}

export const addTicketComment = (id, data) => ({
  type: ADD_TICKET_COMMENT,
  payload: { ...data, uid: uuid() },
  id,
})

//    ----   PROJECTS   ----

export const addProject = (data) => ({
  type: ADD_PROJECT,
  payload: { ...data },
})

export const editProject = (id, data = {}) => ({
  type: EDIT_PROJECT,
  payload: { ...data },
  id,
})

export const addProjectUser = (projectId, userId, data = {}) => ({
  type: ADD_PROJECT_USER,
  id: projectId,
  projectUserId: userId,
})

export const removeProjectUser = (projectId, userId) => ({
  type: REMOVE_PROJECT_USER,
  id: projectId,
  projectUserId: userId,
})

//    ----  USERS   ----

export const editUserRole = (id, role) => ({
  type: EDIT_USER_ROLE,
  payload: { role },
  id,
})

//    ----   FIREBASE LISTENER ACTIONS   ----

export const overwriteProjects = (data) => ({
  type: OVERWRITE_PROJECTS,
  payload: { ...data },
})

export const overwriteUsers = (data) => ({
  type: OVERWRITE_USERS,
  payload: { ...data },
})

export const overwriteTickets = (data) => ({
  type: OVERWRITE_TICKETS,
  payload: { ...data },
})
