import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Card, ContentArea } from "../../Components";
import { convertObjectToList } from "../../Helpers";
import { useRemove, useSet } from "../../Hooks";
import UsersTable from "./UsersTable";

const ManageUsers = (props) => {
  const projects = useSelector((store) => store.projects);
  const users = useSelector((store) => store.users);
  const projectsArray = convertObjectToList(projects);
  const usersArray = convertObjectToList(users);

  console.log('USERS ARE',users)

  const add = useSet();
  const remove = useRemove();

  const addUserToProjet = (userId, projectId) => {
    add(`projects/${projectId}/personnel/${userId}`);
  };

  const removeUserFromProject = (userId, projectId) => {
    remove(`projects/${projectId}/personnel/${userId}`);
  };

  return (
    <ContentArea>
      {projectsArray.map((project) => {
        const { title, projectName, personnel = {} } = project;

        const usersWithAssigned = usersArray.map((user) => {
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
              <UsersTable
                users={usersWithAssigned}
                add={addUserToProjet}
                remove={removeUserFromProject}
                projectId={project.uid}
              />
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
