import React from 'react'
import { Button, FormControl as Control, ListGroup } from 'react-bootstrap'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { withFirebase } from '../Firebase'
import { useAuthUser, useLogout } from '../Session'

const Navbar = ({ setShowAddTicket, firebase }) => {
  const { authUser } = useAuthUser()
  const logout = useLogout()

  const history = useHistory()

  return (
    <Wrapper>
      <List>
        <Li onClick={() => history.push('/')}>
          <Link style={{ color: '#deb150', fontSize: '18px' }}>
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

const Link = styled.div`
  padding: 0;
  margin: 0;
  text-align: center;

  &.active {
    background-color: #deb150 !important;
    color: black;
  }
`

export default withFirebase(Navbar)
