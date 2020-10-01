import React from "react";
import { Button as UnstyledButton, NavLink as Link } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Card, CardTable, ContentArea } from "../../Components";
import * as ROUTES from "../../routes";

const MyProjects = () => {
  const projects = useSelector((store) => store.projects);

  const sortedProjects = projects.map((project) => {
    const { projectName: title, description, uid } = project;

    return [
      title,
      description,
      <>
        <Link href={`${ROUTES.LINK_PROJECT(uid)}`}>Manage Users</Link>
        <Link href={`${ROUTES.LINK_PROJECT(uid)}`}>Details</Link>
      </>,
    ];
  });

  return (
    <ContentArea>
      <Button>CREATE NEW PROJECT</Button>
      <Wrapper>
        <Card
          title="Your Projects"
          description="Table of all outstanding projects"
        >
          <CardTable
            headings={["Project Name", "Description", " "]}
            rows={sortedProjects || [[]]}
          />
        </Card>
      </Wrapper>
    </ContentArea>
  );
};

const Button = styled(UnstyledButton)`
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 80px;
`;

export default MyProjects;
