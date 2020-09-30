import React from "react";
import RouterSwitch from "./RouterSwitch";
import { withAuthentication } from "./Session";
import { Navbar, Sidebar } from "./Components";
import styled from "styled-components";
import { AddTicketModal } from "./Components";

const App = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Inner>
        <Navbar />
        <RouterSwitch />
      </Inner>
      <AddTicketModal />
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
