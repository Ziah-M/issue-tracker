import {
  faChartLine,
  faProjectDiagram,
  faTasks,
  faUsers,
  faUsersCog,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ListGroup, Nav } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'
import * as ROUTES from '../routes'
import { useAuthUser } from '../Session'

const Sidebar = () => {
  const { authUser } = useAuthUser()
  const { pathname } = useLocation()
  const history = useHistory()

  return (
    <Wrapper>
      <Welcome>
        <h1>Welcome,</h1>
        <div>{authUser.name}</div>
      </Welcome>
      <List>
        <Li
          className={pathname === ROUTES.LANDING && 'is-active'}
          onClick={() => history.push(ROUTES.LANDING)}
        >
          <Icon icon={faChartLine} />
          <Link>Dashboard</Link>
        </Li>
        <Li
          className={pathname === ROUTES.MANAGE_ROLES && 'is-active'}
          onClick={() => history.push(ROUTES.MANAGE_ROLES)}
        >
          <Icon icon={faUsersCog} />
          <Link>Manage Roles</Link>
        </Li>
        <Li
          className={pathname === ROUTES.MANAGE_USERS && 'is-active'}
          onClick={() => history.push(ROUTES.MANAGE_USERS)}
        >
          <Icon icon={faUsers} />
          <Link>Manage Project Users</Link>
        </Li>
        <Li
          className={pathname === ROUTES.MY_PROJECTS && 'is-active'}
          onClick={() => history.push(ROUTES.MY_PROJECTS)}
        >
          <Icon icon={faProjectDiagram} />
          <Link>My Projects</Link>
        </Li>
        <Li
          className={pathname === ROUTES.MY_TICKETS && 'is-active'}
          onClick={() => history.push(ROUTES.MY_TICKETS)}
        >
          <Icon icon={faTasks} />
          <Link>My Tickets</Link>
        </Li>
        {/* <Li>
        <Link onClick={() => history.push(ROUTES.USER_PROFILE}>User Profile</Link>
      </Li> */}
      </List>
    </Wrapper>
  )
}

const Link = styled.div`
  color: gray;
  font-size: 12px;
  display: inline-block;
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
