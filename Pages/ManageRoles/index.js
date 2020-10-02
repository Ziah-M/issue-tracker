import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ContentArea } from '../../Components'
import { convertObjectToList } from '../../Helpers'
import AssignRoleForm from './AssignRoleForm'
import PersonnelOverview from './PersonnelOverview'

const ManageRoles = ({ authUser }) => {
  const users = useSelector((store) => store.users)

  const usersArray = convertObjectToList(users)

  return (
    <ContentArea>
      <div style={{ height: 'auto', width: '100%', overflow: 'hidden' }}>
        {JSON.stringify(authUser)}
      </div>
      <h1>Manage User Roles</h1>
      <div style={{ width: '100%', border: '2px solid red' }}>
        <ColLeft>
          <AssignRoleForm users={usersArray} />
        </ColLeft>
        <ColRight>
          <PersonnelOverview users={usersArray} />
        </ColRight>
      </div>
    </ContentArea>
  )
}

const ColLeft = styled.div`
  width: 30%;
  min-height: 100px;
  display: inline-block;
`

const ColRight = styled.div`
  width: 60%;
  min-height: 100px;
  display: inline-block;
`

export default ManageRoles
