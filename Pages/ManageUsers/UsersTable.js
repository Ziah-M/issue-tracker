import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { CardTable } from '../../Components'
import useFirebaseActions from '../../redux/useFirebaseActions'

const UsersTable = ({ users, projectId }) => {
  const dispatch = useDispatch()
  const { addProjectUser, removeProjectUser } = useFirebaseActions()

  const add = (projectId, userId) => {
    dispatch(addProjectUser(projectId, userId))
  }

  const remove = (projectId, userId) => {
    dispatch(removeProjectUser(projectId, userId))
  }

  const headings = ['User', 'Role', ' ']
  const rows = users
    ? users.map((user) => [
        user.name,
        user.role,
        user.isAssignedToProject ? (
          <Button
            variant="danger"
            size="sm"
            onClick={() => add(projectId, user.uid)}
          >
            Remove
          </Button>
        ) : (
          <Button
            variant="success"
            size="sm"
            onClick={() => remove(projectId, user.uid)}
          >
            Add
          </Button>
        ),
      ])
    : [[]]

  return <CardTable headings={headings} rows={rows} />
}

export default UsersTable
