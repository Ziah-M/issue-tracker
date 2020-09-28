import React from "react";
import { TitleBanner } from "../../Components";
import styled from "styled-components";

// EDIT or ASSIGN -> load

const TicketsTable = () => {
  return (
    <Wrapper>
      <TitleBanner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: blue;
  width: 100%;
  height: 100%;
  transform: scale(0.9);
`;

export default TicketsTable;
