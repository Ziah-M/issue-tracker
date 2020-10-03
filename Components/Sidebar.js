import React from 'react'
import styled from 'styled-components'
import { Nav, ListGroup } from 'react-bootstrap'
import * as ROUTES from '../routes'
import { Link } from 'react-router-dom'

const Sidebar = () => (
  <Wrapper>
    <List>
      <Li>
        <Link to={ROUTES.HOME}>Dashboard Home</Link>
      </Li>
      <Li>
        <Link to={ROUTES.MANAGE_ROLES}>Manage User Roles</Link>
      </Li>
      <Li>
        <Link to={ROUTES.MANAGE_USERS}>Manage Project Users</Link>
      </Li>
      <Li>
        <Link to={ROUTES.MY_PROJECTS}>My Projects</Link>
      </Li>
      <Li>
        <Link to={ROUTES.MY_TICKETS}>My Tickets</Link>
      </Li>
      <Li>
        <Link to={ROUTES.USER_PROFILE}>User Profile</Link>
      </Li>
    </List>
  </Wrapper>
)

const Wrapper = styled.div`
  min-height: 100vh;
  width: 200px;
  min-width: 200px;
  height: auto;
  background: blue;
  padding-top: 50px;
`

const Li = styled(ListGroup.Item)`
  user-select: none;
  &:hover {
    background: #deb150;
  }
`

const List = styled(ListGroup)``

const NavLink = styled(Nav.Link)`
  padding: 0;
  margin: 0;
  text-align: center;

  &.active {
    background-color: #deb150 !important;
    color: black;
  }
`

export default Sidebar
