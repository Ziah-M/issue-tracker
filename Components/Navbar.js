import React from 'react'
import styled from 'styled-components'
import { Nav, ListGroup, FormControl as Control, Button } from 'react-bootstrap'
import * as ROUTES from '../routes'
import { useAuthUser } from '../Session'
import { withFirebase } from '../Firebase'

const Navbar = ({ setShowAddTicket, firebase }) => {
  const authUser = useAuthUser()
  return (
    <Wrapper>
      <List>
        <Li>
          <Link href={ROUTES.HOME}>
            Logged in as: {`${!!authUser && authUser.name}`}
          </Link>
        </Li>
        <Li>
          <Control placeholder="search" />
        </Li>
        <Li>
          <Link href={ROUTES.MANAGE_USERS}>Home</Link>
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
          <Button
            variant="danger"
            size="sm"
            onClick={() => firebase.doSignOut()}
          >
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
  background: blue;
  background: green;
`

const Li = styled(ListGroup.Item)`
  user-select: none;
  min-width: 100px;
  display: inline-block;
  &:hover {
    background: #deb150;
  }
`

const List = styled(ListGroup)`
  display: flex;
  flex-direction: row;
`

const Link = styled(Nav.Link)`
  padding: 0;
  margin: 0;
  text-align: center;

  &.active {
    background-color: #deb150 !important;
    color: black;
  }
`

export default withFirebase(Navbar)
