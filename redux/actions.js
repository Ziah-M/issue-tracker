import uuid from 'uuid'
import ReduxThunk from 'redux-thunk'
import {
  ADD_PROJECT,
  ADD_TICKET,
  EDIT_TICKET,
  EDIT_USER_ROLE,
  TOGGLE_USER_ON_PROJECT,
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
  payload: { ...data, uid: uuid() },
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

const addProject = (data) => ({
  type: ADD_PROJECT,
  payload: { ...data },
})

const editProject = (id, data = {}) => ({
  type: EDIT_PROJECT,
  payload: { ...data },
  id,
})

const addProjectUser = (data = {}) => ({
  type: ADD_PROJECT_USER,
  payload: { ...data, uid: uuid() },
})

const removeProjectUser = (id) => ({
  type: REMOVE_PROJECT_USER,
  id,
})

//    ----  USERS   ----

export const editUserRole = (id, role) => ({
  type: EDIT_USER_ROLE,
  payload: { role },
  id,
})

//    ----   FIREBASE LISTENER ACTIONS   ----

export const overwriteProjects = (state) => ({
  type: OVERWRITE_PROJECTS,
  payload: { state },
})

export const overwriteUsers = (state) => ({
  type: OVERWRITE_USERS,
  payload: { state },
})

export const overwriteTickets = (state) => ({
  type: OVERWRITE_TICKETS,
  payload: { state },
})
