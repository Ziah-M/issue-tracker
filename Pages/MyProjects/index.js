import React from "react";
import { Card, CardTable, ContentArea } from "../../Components";
import { convertObjectToList } from "../../Helpers";
import { useProjects } from "../../Hooks";
import * as ROUTES from "../../routes";

const MyProjects = () => {
  const projects = useProjects();
  const projectsArray = !projects ? [] : convertObjectToList(projects);

  const sortedProjects = projectsArray.map((project) => {
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

export default MyProjects;
