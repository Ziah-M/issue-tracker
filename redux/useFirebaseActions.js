import { getTimestamp, removeFalseyValuesFromObject } from '../Helpers'
import { useRemove, useSet } from '../Hooks'
import usePush from '../Hooks/CRUD/usePush'
import useUpdate from '../Hooks/CRUD/useUpdate'
import { useAuthUser, useCheckForDemo } from '../Session'
import * as actions from './actions'

const useFirebaseActions = () => {
  const isDemo = useCheckForDemo()
  const { authUser } = useAuthUser()

  // FIREBASE CRUD HOOKS
  const pushToDb = usePush()
  const updateDb = useUpdate()
  const setInDb = useSet()
  const removeFromDb = useRemove()

  // ----            THUNKS            ----
  // ----            TICKETS            ----
  const addTicket = (data) => (dispatch, getState) => {
    const ticket = {
      ...data,
      created: getTimestamp(),
      submitter: authUser.name,
    }

    if (isDemo) {
      dispatch(actions.addTicket(ticket))
    } else {
      pushToDb('tickets', ticket)
    }
  }

  const editTicket = (id, data) => (dispatch, getState) => {
    const updatedData = removeFalseyValuesFromObject(data)

    const ticket = {
      ...updatedData,
      updated: getTimestamp(),
    }

    // History
    const oldProperties = getState().tickets[id]

    if (isDemo) {
      dispatch(actions.editTicketWithHistory(id, ticket))
    } else {
      updateDb(`tickets/${id}`, ticket)

      // PUSH A NEW HISTORY FOR EACH UPDATED PROPERTY
      Object.keys(ticket).map((key) => {
        const history = {
          property: key,
          oldValue: oldProperties[key],
          newValue: ticket[key],
          updated: getTimestamp(),
        }
        if (history.property !== 'updated') {
          pushToDb(`tickets/${id}/history`, history)
        }
      })
    }
  }

  const addTicketComment = (ticketId, comment) => (dispatch) => {
    const newComment = {
      submitter: authUser.name,
      comment,
      created: getTimestamp(),
    }

    if (isDemo) {
      dispatch(actions.addTicketComment(ticketId, newComment))
    } else {
      pushToDb(`tickets/${ticketId}/comments`, newComment)
    }
  }

  // ----            PROJECTS            ----
  const addProject = (details) => (dispatch) => {
    if (isDemo) {
      dispatch(actions.addProject(details))
    } else {
      pushToDb('projects', details)
    }
  }

  const editProject = (id, details) => (dispatch) => {
    if (isDemo) {
      dispatch(actions.editProject(id, details))
    } else {
      updateDb(`projects/${id}`, details)
    }
  }

  const addProjectUser = (projectId, userId) => (dispatch) => {
    if (isDemo) {
      dispatch(actions.addProjectUser(projectId, userId))
    } else {
      setInDb(`projects/${projectId}/personnel/${userId}`)
    }
  }

  const removeProjectUser = (projectId, userId) => (dispatch) => {
    if (isDemo) {
      dispatch(actions.removeProjectUser(projectId, userId))
    } else {
      const path = `projects/${projectId}/personnel/${userId}`
      removeFromDb(path)
    }
  }

  // ----            USERS            ----

  const editUserRole = (userId, role) => (dispatch) => {
    if (isDemo) {
      const appendDemo = role.includes('DEMO') ? role : `DEMO_${role}`

      dispatch(actions.editUserRole(userId, appendDemo))
    } else {
      const path = `users/${userId}`
      updateDb(path, { role })
    }
  }

  const firebaseActions = {
    addTicket,
    editTicket,
    editProject,
    addProjectUser,
    removeProjectUser,
    editUserRole,
    addProject,
    addTicketComment,
  }

  return firebaseActions
}

export default useFirebaseActions
