import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";
import EditForm from "./EditForm";

const Edit = ({ ticket }) => {
  return (
    <Wrapper>
      <Card
        title={`Edit Ticket`}
        description="Alter ticket properties"
      >
        <EditForm ticket={ticket} />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position:absolute;
  left:350px;
  top:150px;
  height:500px;
  width:500px;
  border:2px solid black;
`;

export default Edit;
