import { combineReducers } from 'redux'
import tickets from './tickets'
import users from './users'
import projects from './projects'

export default combineReducers({ tickets, projects, users })
