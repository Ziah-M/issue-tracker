import React, { useState } from 'react'
import styled from 'styled-components'
import { AddTicketModal, Navbar, Sidebar } from './Components'
import { useFirebaseListener } from './Hooks'
import RouterSwitch from './RouterSwitchSignedIn'

const App = () => {
  const [showAddTicket, setShowAddTicket] = useState(false)
  const handleCloseAddTicket = () => setShowAddTicket(false)
  const handleShowAddTicket = () => setShowAddTicket(true)

  useFirebaseListener()

  return (
    <Grid>
      <GridItem area="sidebar">
        <Sidebar />
      </GridItem>
      <GridItem area="navbar">
        <Navbar setShowAddTicket={handleShowAddTicket} />
      </GridItem>
      <GridItem area="inner" style={{ borderLeft: '1px solid gainsboro;' }}>
        <RouterSwitch />
      </GridItem>
      <AddTicketModal
        show={showAddTicket}
        handleShow={handleShowAddTicket}
        handleClose={handleCloseAddTicket}
        isEdit={false}
      />
    </Grid>
  )
}

const Grid = styled.div`
  width: 100%;
  min-height: 100vh;

  background: white;

  display: grid;
  grid-template:
    'sidebar navbar' min-content
    'sidebar inner' 1fr
    / min-content 1fr;
`

const GridItem = styled.div`
  grid-area: ${(props) => props.area};
`

export default App
