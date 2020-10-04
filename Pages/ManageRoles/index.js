import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ContentArea } from '../../Components'
import { convertObjectToList } from '../../Helpers'
import AssignRoleForm from './AssignRoleForm'
import PersonnelOverview from './PersonnelOverview'
import { Col, Row } from 'react-bootstrap'

const ManageRoles = ({ authUser }) => {
  const users = useSelector((store) => store.users)

  const usersArray = convertObjectToList(users)

  return (
    <ContentArea>
      <Row className="justify-content-center mb-5">
        <h1>Manage User Roles</h1>
      </Row>
      <Row>
        <Col xs="4" xl='3'>
          <AssignRoleForm users={usersArray} />
        </Col>
        <Col xs="7">
          <PersonnelOverview users={usersArray} />
        </Col>
      </Row>
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
