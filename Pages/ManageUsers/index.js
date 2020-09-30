import React from "react";
import { withAuthorization, conditions } from "../../Session";
import { TitleBanner, Card, ContentArea, CardTable } from "../../Components";
import { useChildren, useNestedChildren } from "../../Hooks";
import { convertObjectToList } from "../../Helpers";
import UsersTable from "./UsersTable";
import styled from "styled-components";

const ManageUsers = ({}) => {
  const { data: projects } = useChildren("projects");
  const { data: users } = useChildren("users");

  return (
    <ContentArea>
      {projects.map((project) => {
        const { title, projectName, personnel } = project;

        const usersWithAssigned = users.map((user) => {
          return !!personnel[`${user.uid}`]
            ? {
                ...user,
                isAssignedToProject: true,
              }
            : { ...user, isAssignedToProject: false };
        });
        return (
          <Wrapper>
            <Card title={project.projectName} description={project.description}>
              <UsersTable users={usersWithAssigned} />
            </Card>
          </Wrapper>
        );
      })}
    </ContentArea>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 80px;
`;

export default withAuthorization(conditions.isAdmin)(ManageUsers);
