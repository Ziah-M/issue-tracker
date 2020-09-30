import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";
import { CardTable } from "../../Components";
import { Button } from "react-bootstrap";

const UsersTable = ({
  users,
  add = (f) => f,
  remove = (f) => f,
  projectId,
}) => {
  const headings = ["User", "Role", " "];
  console.log(users);
  const rows = users
    ? users.map((user) => [
        user.name,
        user.role,
        user.isAssignedToProject ? (
          <Button
            variant="danger"
            size="sm"
            onClick={() => remove(user.uid, projectId)}
          >
            Remove
          </Button>
        ) : (
          <Button
            variant="success"
            size="sm"
            onClick={() => add(user.uid, projectId)}
          >
            Add
          </Button>
        ),
      ])
    : [[]];

  return <CardTable headings={headings} rows={rows} />;
};

export default UsersTable;
