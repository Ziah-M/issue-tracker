import React, { useState } from "react";
import RouterSwitch from "./RouterSwitch";
import { withAuthentication } from "./Session";
import { Navbar, Sidebar } from "./Components";
import styled from "styled-components";
import { AddTicketModal } from "./Components";

const App = () => {
  const [showAddTicket, setShowAddTicket] = useState(false);
  const handleCloseAddTicket = () => setShowAddTicket(false);
  const handleShowAddTicket = () => setShowAddTicket(true);

  return (
    <Wrapper>
      <Sidebar />
      <Inner>
        <Navbar setShowAddTicket={handleShowAddTicket} />
        <RouterSwitch />
      </Inner>
      <AddTicketModal
        show={showAddTicket}
        handleShow={handleShowAddTicket}
        handleClose={handleCloseAddTicket}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
`;

export default withAuthentication(App);
