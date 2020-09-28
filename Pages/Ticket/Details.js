import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";

const Details = ({
  ticket: {
    assignedDev = "",
    submitter = "",
    projectName = "",
    priority = "",
    status = "",
    type = "",
    created = "",
    updated = "",
  },
}) => {
  return (
    <Card title={`Details`} description="All Tickets | Edit Tickets">
      <Row>
        <Col>
          <Detail title="Assigned Developer" info={assignedDev}></Detail>
        </Col>
        <Col>
          <Detail title="Submitter" info={submitter}></Detail>
        </Col>
      </Row>
      <Row>
        <Col>
          <Detail title="Project" info={projectName}></Detail>
        </Col>
        <Col>
          <Detail title="Priority" info={priority}></Detail>
        </Col>
      </Row>
      <Row>
        <Col>
          <Detail title="Status" info={status}></Detail>
        </Col>
        <Col>
          <Detail title="Type" info={type}></Detail>
        </Col>
      </Row>
      <Row>
        <Col>
          <Detail title="Created" info={created}></Detail>
        </Col>
        <Col>
          <Detail title="Updated" info={updated}></Detail>
        </Col>
      </Row>
    </Card>
  );
};

const Row = styled.div`
  width: 100%;
  padding: 10px;
  border-top: 1px solid lightgray;
`;

const Col = styled.div`
  width: 50%;
  min-height: 50px;
  display: inline-block;
  padding: 10px;
`;

const Title = styled.div`
  text-transform: uppercase;
  width: 100%;
  height: 18px;
  font-size: 12px;
  font-weight: 700;
`;

const Info = styled.div`
  text-transform: capitalize;
  font-size: 12px;
  height: 18px;
  margin-left: 5px;
  width: 100%;
  font-weight: 400;
  color: gray;
  overflow: hidden; ;
`;

const Detail = ({ title = "", info = "" }) => (
  <>
    <Title>{title}</Title>
    <Info>{info}</Info>
  </>
);

export default Details;
