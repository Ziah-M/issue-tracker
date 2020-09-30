import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";
import { CardTable } from "../../Components";

const UsersTable = ({ users }) => {
  const headings = ["User", "Role", " "];
  console.log(users);
  const rows = users
    ? users.map((user) => [
        user.name,
        user.role,
        user.isAssignedToProject ? "Success" : "Danger",
      ])
    : [[]];

  return <CardTable headings={headings} rows={rows} />;
};

export default UsersTable;
