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
import { useAuthUser } from '../Session'
import { useLocation } from 'react-router'

const Sidebar = () => {
  const { authUser } = useAuthUser()
  const { pathname } = useLocation()
  return (
    <Wrapper>
      <Welcome>
        <h1>Welcome,</h1>
        <div>{authUser.name}</div>
      </Welcome>
      <List>
        <Li className={pathname === ROUTES.LANDING && 'is-active'}>
          <Icon icon={faChartLine} />
          <Link to={ROUTES.LANDING}>Dashboard</Link>
        </Li>
        <Li className={pathname === ROUTES.MANAGE_ROLES && 'is-active'}>
          <Icon icon={faUsersCog} />
          <Link to={ROUTES.MANAGE_ROLES}>Manage Roles</Link>
        </Li>
        <Li className={pathname === ROUTES.MANAGE_USERS && 'is-active'}>
          <Icon icon={faUsers} />
          <Link to={ROUTES.MANAGE_USERS}>Manage Project Users</Link>
        </Li>
        <Li className={pathname === ROUTES.MY_PROJECTS && 'is-active'}>
          <Icon icon={faProjectDiagram} />

          <Link to={ROUTES.MY_PROJECTS}>My Projects</Link>
        </Li>
        <Li className={pathname === ROUTES.MY_TICKETS && 'is-active'}>
          <Icon icon={faTasks} />

          <Link to={ROUTES.MY_TICKETS}>My Tickets</Link>
        </Li>
        {/* <Li>
        <Link to={ROUTES.USER_PROFILE}>User Profile</Link>
      </Li> */}
      </List>
    </Wrapper>
  )
}

const Link = styled(UnstyledLink)`
  color: gray;
  font-size: 12px;
`

const Welcome = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0 40px 0;
  font-size: 24px;

  color: gray;
  background: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    font-size: 18px;
    text-transform: uppercase;
  }
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
  background: white;
`

const Li = styled(ListGroup.Item)`
  user-select: none;
  &:hover {
    background: #deb150;
  }
  &.is-active {
    background: #deb150;
    * {
      color: white;
    }
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
