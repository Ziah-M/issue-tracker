import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Card, ContentArea } from "../../Components";
import { convertObjectToList } from "../../Helpers";
import UsersTable from "./UsersTable";

const ManageUsers = (props) => {
  const projects = useSelector((store) => store.projects);
  const users = useSelector((store) => store.users);
  const projectsArray = convertObjectToList(projects);
  const usersArray = convertObjectToList(users);

  return (
    <ContentArea>
      {projectsArray.map((project) => {
        const { description, projectName, personnel = {} } = project;

        const usersWithAssigned = usersArray.map((user) => {
          return !!personnel[`${user.uid}`]
            ? {
                ...user,
                isAssignedToProject: false,
              }
            : { ...user, isAssignedToProject: true };
        });
        return (
          <Wrapper>
            <Card
              title={projectName}
              description={description}
              stlye={{ height: "auto" }}
            >
              <UsersTable users={usersWithAssigned} projectId={project.uid} />
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

export default ManageUsers;
