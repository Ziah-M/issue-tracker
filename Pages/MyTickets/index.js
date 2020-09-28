import React from "react";
import TicketsTable from "./TicketsTable";
import styled from "styled-components";

const MyTickets = () => {
  return (
    <Wrapper>
      <TicketsTable />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background: lightgrey;
`;

export default MyTickets;
