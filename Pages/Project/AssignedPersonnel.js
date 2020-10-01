import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";
import { CardTable } from "../../Components";

const AssignedPersonnel = ({ users=[] }) => {
  const headings = ["User", "Email", "Role"];

  const rows = users
    ? users.map((user) => [user.name, user.email, user.role])
    : [[]];

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
