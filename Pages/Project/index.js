import React from "react";
import { ContentArea, Card } from "../../Components";
import AssignedPersonnel from "./AssignedPersonnel";
import Overview from "./Details";
import TicketsOverview from "./TicketsOverview";
import Edit from "./Edit";
import {
  useChild,
  useChildren,
  useNestedChildren,
  useTickets,
  useUsers,
} from "../../Hooks";
import { useParams } from "react-router";
import styled from "styled-components";
import { convertObjectToList } from "../../Helpers";

const Project = () => {
  const { id } = useParams();
  const project = useChild("projects", id);
  const { data: assignedPersonnel } = useNestedChildren(
    "projects",
    id,
    "personnel"
  );
  const { data: assignedTickets } = useNestedChildren(
    "projects",
    id,
    "tickets"
  );

  const { data: tickets } = useChildren("tickets");
  const { data: users } = useChildren("users");


  // let assignedTickets = []

  //   if (tickets && project.tickets) {
  //     assignedTickets = project.tickets.map((id) => tickets[id]);
  //   }

  //   let assignedUsers=[]

  //   if (users && project.personnel) {
  //     assignedUsers = project.personnel.map((id) => users[id]);
  //   }

  console.log(project);

  return (
    <ContentArea>
      {project && (
        <Wrapper>
          <Section style={{ width: "100%" }}>
            <Overview project={project} />
          </Section>
          <Section>
            <AssignedPersonnel users={users} />
          </Section>
          <Section>
            <TicketsOverview tickets={tickets} />
          </Section>

          <Modal>
            <Edit project={project} />
          </Modal>
        </Wrapper>
      )}
    </ContentArea>
  );
};

const Section = styled.div`
  width: 50%;
  padding: 10px;
  margin-bottom: 50px;
  height: auto;
  min-height: 50px;
`;

const Modal = styled.div`
  /* DISPLAY IF ROUTE HAS /edit */
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Project;
