import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";
import { CardTable } from "../../Components";

const AssignedPersonnel = () => {
  const headings = ["User", "Email", "Role"];
  const rows = [["Ziah Mayne", "Demo@Demo.com", "Admin"]];

  return (
    <Card
      title="Assigned Personnel"
      description="Users assigned to this project"
    >
      <CardTable headings={headings} rows={rows} />
    </Card>
  );
};

export default AssignedPersonnel;
