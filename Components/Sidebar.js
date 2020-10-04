import React from 'react'
import styled from 'styled-components'
import { Nav, ListGroup } from 'react-bootstrap'
import * as ROUTES from '../routes'
import { Link as UnstyledLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUsers,
  faUsersCog,
  faProjectDiagram,
  faTasks,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <Wrapper>
    <List>
      <Li>
        <Icon icon={faChartLine} />
        <Link to={ROUTES.HOME}>Dashboard</Link>
      </Li>
      <Li>
        <Icon icon={faUsersCog} />
        <Link to={ROUTES.MANAGE_ROLES}>Manage Roles</Link>
      </Li>
      <Li>
        <Icon icon={faUsers} />
        <Link to={ROUTES.MANAGE_USERS}>Manage Project Users</Link>
      </Li>
      <Li>
        <Icon icon={faProjectDiagram} />

        <Link to={ROUTES.MY_PROJECTS}>My Projects</Link>
      </Li>
      <Li>
        <Icon icon={faTasks} />

        <Link to={ROUTES.MY_TICKETS}>My Tickets</Link>
      </Li>
      {/* <Li>
        <Link to={ROUTES.USER_PROFILE}>User Profile</Link>
      </Li> */}
    </List>
  </Wrapper>
)

const Link = styled(UnstyledLink)`
  color: gray;
  font-size: 12px;
`

const Icon = styled(FontAwesomeIcon)`
  color: gainsboro;
  margin-right: 15px;
`

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
