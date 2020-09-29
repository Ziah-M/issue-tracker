import React from "react";
import { Card, CardTable, ContentArea } from "../../Components";
import { convertObjectToList } from "../../Helpers";
import { useTickets } from "../../Hooks";
import * as ROUTES from "../../routes";

const MyTickets = () => {
  const tickets = useTickets();
  const ticketsArray = !tickets ? [] : convertObjectToList(tickets);

  const sortedTickets = ticketsArray.map((ticket) => {
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
      {
        link1: {
          to: ROUTES.LINK_TICKET(uid),
          name: "Manage Users",
        },
        link2: {
          to: ROUTES.LINK_TICKET(uid),
          name: "Details",
        },
      },
    ];
  });

  return (
    <ContentArea>
      <Card title="Your Tickets" description="Table of all outstanding tickets">
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
    </ContentArea>
  );
};

export default MyTickets;
