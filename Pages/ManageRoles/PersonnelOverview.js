import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";
import { CardTable } from "../../Components";

const PersonnelOverview = ({ users = [] }) => {
  const headings = ["User", "Email", "Role"];

  const sortedUsers = users.map((user) => {
    const { name, email, role } = user;

    return [name, email, role];
  });

  return (
    <Card title="Your Personnel" description="All the users in your database">
      <CardTable headings={headings} rows={sortedUsers || [[]]} />
    </Card>
  );
};

export default PersonnelOverview;
