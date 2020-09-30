import React from "react";
import { Button as UnstyledButton } from "react-bootstrap";
import styled from "styled-components";
import { Card, CardTable, ContentArea } from "../../Components";
import { useChildren } from "../../Hooks";
import * as ROUTES from "../../routes";

const MyProjects = () => {
  const { data: projects } = useChildren("projects");

  const sortedProjects = projects.map((project) => {
    const { projectName: title, description, uid } = project;

    return [
      title,
      description,
      {
        link1: {
          to: ROUTES.LINK_PROJECT(uid),
          name: "Manage Users",
        },
        link2: {
          to: ROUTES.LINK_PROJECT(uid),
          name: "Details",
        },
      },
    ];
  });

  return (
    <ContentArea>
      <Button>CREATE NEW PROJECT</Button>
      <Card
        title="Your Projects"
        description="Table of all outstanding projects"
      >
        <CardTable
          headings={["Project Name", "Description", " "]}
          rows={sortedProjects || [[]]}
        />
      </Card>
    </ContentArea>
  );
};

const Button = styled(UnstyledButton)`
  margin-bottom: 50px;
`;

export default MyProjects;
