//    TICKETS

export const getTicketsState = (store) => store.tickets

export const getTickets = (store) =>
  getTicketsState(store) ? getTicketsState(store) : []

//    PROJECTS

export const getProjectsState = (store) => store.projects

export const getProjects = (store) =>
  getProjectsState(store) ? getProjectsState(store) : []

//    USERS

export const getUsersState = (store) => store.users

export const getUsers = (store) =>
  getUsersState(store) ? getUsersState(store) : []
