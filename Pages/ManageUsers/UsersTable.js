import React from "react";
import { Button } from "react-bootstrap";
import { CardTable } from "../../Components";

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
            onClick={() => remove(projectId, user.uid)}
          >
            Remove
          </Button>
        ) : (
          <Button
            variant="success"
            size="sm"
            onClick={() => add(projectId, user.uid)}
          >
            Add
          </Button>
        ),
      ])
    : [[]];

  return <CardTable headings={headings} rows={rows} />;
};

export default UsersTable;
