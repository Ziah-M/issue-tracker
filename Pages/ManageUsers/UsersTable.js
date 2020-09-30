import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";
import { CardTable } from "../../Components";
import { Button } from "react-bootstrap";

const UsersTable = ({ users }) => {
  const headings = ["User", "Role", " "];
  console.log(users);
  const rows = users
    ? users.map((user) => [
        user.name,
        user.role,
        user.isAssignedToProject ? (
          <Button variant="remove" size="sm">
            Remove
          </Button>
        ) : (
          <Button variant="success" size="sm">
            Add
          </Button>
        ),
      ])
    : [[]];

  return <CardTable headings={headings} rows={rows} />;
};

export default UsersTable;
