import React from "react";
import { Table as UnstyledTable } from "react-bootstrap";
import styled from "styled-components";
import { TitleBanner } from "../../Components";
import { useTickets } from "../../Hooks";
import { convertObjectToList } from "../../Helpers";

const TicketsTable = () => {
  const tickets = useTickets();

  const ticketsArray = !tickets ? [] : convertObjectToList(tickets);

  return (
    <Wrapper>
      <TitleBanner
        title="Your Tickets"
        description="Table of all outstanding tickets"
      />
      <Table striped hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Project Name</th>
            <th>Assigned To Dev</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Type</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tickets &&
            ticketsArray.map((ticket, index) => (
              <tr key={`ticket-row-${index}`}>
                <td>{ticket.title}</td>
                <td>{ticket.projectName}</td>
                <td>{ticket.assignedDev}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.status}</td>
                <td>{ticket.type}</td>
                <td>{ticket.created}</td>
                <td>
                  Edit/Assign
                  <br />
                  Details
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: blue;
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Table = styled(UnstyledTable)`
  background: white;
  color: black;
`;

export default TicketsTable;
