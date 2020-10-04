import React from 'react'
import styled from 'styled-components'
import { Nav, ListGroup, FormControl as Control, Button } from 'react-bootstrap'
import * as ROUTES from '../routes'
import { useAuthUser, useLogout } from '../Session'
import { withFirebase } from '../Firebase'
import { Link as UnstyledLink } from 'react-router-dom'

const Navbar = ({ setShowAddTicket, firebase }) => {
  const { authUser } = useAuthUser()
  const logout = useLogout()

  return (
    <Wrapper>
      <List>
        <Li>
          <Link to={'/'} style={{ color: '#deb150', fontSize: '18px' }}>
            <span>BACK TO PORTFOLIO</span>
          </Link>
        </Li>

        <Li>
          <Button
            variant="success"
            size="sm"
            onClick={() => setShowAddTicket(true)}
          >
            Create Ticket
          </Button>
        </Li>
        <Li>
          <Control placeholder="search" />
        </Li>
        <Li>
          <Button variant="danger" size="sm" onClick={() => logout()}>
            Log Out
          </Button>
        </Li>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 60px;
  width: 100%;
  min-width: 100%;
  height: auto;
  background: white;
`

const Li = styled(ListGroup.Item)`
  user-select: none;
  min-width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #deb150;

    span {
      color: white;
    }
  }
`

const List = styled(ListGroup)`
  display: flex;
  flex-direction: row;
`

const Link = styled(UnstyledLink)`
  padding: 0;
  margin: 0;
  text-align: center;

  &.active {
    background-color: #deb150 !important;
    color: black;
  }
`

export default withFirebase(Navbar)
