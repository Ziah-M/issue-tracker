import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Card, ContentArea } from "../../Components";
import { convertObjectToList } from "../../Helpers";
import useFirebaseActions from "../../redux/useFirebaseActions";
import UsersTable from "./UsersTable";

const ManageUsers = (props) => {
  const projects = useSelector((store) => store.projects);
  const users = useSelector((store) => store.users);
  const projectsArray = convertObjectToList(projects);
  const usersArray = convertObjectToList(users);

  console.log("USERS ARE", users);
  const dispatch = useDispatch();
  const { addProjectUser, removeProjectUser } = useFirebaseActions();

  const addUserToProjet = (projectId, userId) => {
    dispatch(addProjectUser(projectId, userId));
  };

  const removeUserFromProject = (projectId, userId) => {
    dispatch(removeProjectUser(projectId, userId));
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
