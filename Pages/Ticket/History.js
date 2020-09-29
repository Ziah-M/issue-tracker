import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";
import { CardTable } from "../../Components";

const History = () => {
  const headings = ["Property", "Old Value", "New Value", "Timestamp"];
  const rows = [
    ["AssignedToUserId", "Ziah Mayne", "John Citizen", "12/09/2020 6:18:52 PM"],
  ];

  return (
    <Card title="History" description="Log of changes for this ticket">
      <CardTable headings={headings} rows={rows} />
    </Card>
  );
};

export default History;
