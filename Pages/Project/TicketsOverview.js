import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";
import { CardTable } from "../../Components";

const TicketsOverview = () => {
  const headings = ["Title", "Submitter", "Developer", "Status", "Created", ""];
  const rows = [
    [
      "Better styling",
      "Ziah",
      "demo dev",
      "open",
      "16/09/2020 5:51 PM",
      "More Details",
    ],
  ];

  return (
    <Card
      title="Tickets for this Project"
      description="Simplified Ticket Details"
    >
      <CardTable headings={headings} rows={rows} />
    </Card>
  );
};

export default TicketsOverview;
