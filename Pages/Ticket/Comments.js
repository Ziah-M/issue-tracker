import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";
import { CardTable } from "../../Components";

const Comments = () => {
  const headings = ["Commenter", "Message", "Created"];
  const rows = [
    ["Ziah Mayne", "This needs to resolved today", "13/09/2020 1:02:55 PM"],
  ];

  return (
    <Card title="Comments" description="Comments left on this ticket">
      <CardTable headings={headings} rows={rows} />
    </Card>
  );
};

export default Comments;
