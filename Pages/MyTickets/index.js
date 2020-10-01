import React from "react";
import { NavLink as Link } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Card, CardTable, ContentArea } from "../../Components";
import * as ROUTES from "../../routes";

const MyTickets = () => {
  const tickets = useSelector((store) => store.tickets);

  const sortedTickets = tickets.map((ticket) => {
    const {
      title,
      projectName,
      assignedDev,
      priority,
      status,
      type,
      created,
      uid,
    } = ticket;

    return [
      title,
      projectName,
      assignedDev,
      priority,
      status,
      type,
      created,
      <>
        <Link href={`${ROUTES.LINK_TICKET(uid)}`}>Manage Users</Link>
        <Link href={`${ROUTES.LINK_TICKET(uid)}`}>Details</Link>
      </>,
    ];
  });

  return (
    <ContentArea>
      <Wrapper>
        <Card
          title="Your Tickets"
          description="Table of all outstanding tickets"
        >
          <CardTable
            headings={[
              "Title",
              "Project Name",
              "Assigned To",
              "priority",
              "status",
              "type",
              "created",
              " ",
            ]}
            rows={sortedTickets || [[]]}
          />
        </Card>
      </Wrapper>
    </ContentArea>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 80px;
`;

export default MyTickets;
