import React, { useState } from "react";
import RouterSwitch from "./RouterSwitch";
import { useAuthUser, useCheckForDemo, withAuthentication } from "./Session";
import { Navbar, Sidebar } from "./Components";
import styled from "styled-components";
import { AddTicketModal } from "./Components";
import useActivateDemo from "./Hooks/useActivateDemo";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useFirebaseListener } from "./Hooks";

const App = () => {
  const [showAddTicket, setShowAddTicket] = useState(false);
  const handleCloseAddTicket = () => setShowAddTicket(false);
  const handleShowAddTicket = () => setShowAddTicket(true);

  useActivateDemo();
  useFirebaseListener();

  return (
    <Provider store={store}>
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
    </Provider>
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
