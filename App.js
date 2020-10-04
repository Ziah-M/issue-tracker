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
    <Wrapper>
      <SidebarSection>
        <Sidebar />
      </SidebarSection>
      <Inner>
        <Navbar setShowAddTicket={handleShowAddTicket} />
        <RouterSwitch />
      </Inner>
      <AddTicketModal
        show={showAddTicket}
        handleShow={handleShowAddTicket}
        handleClose={handleCloseAddTicket}
        isEdit={false}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  background: white;
  display: flex;
`

const SidebarSection = styled.div`

`

const Inner = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  border-left: 1px solid gainsboro;
`

export default App
