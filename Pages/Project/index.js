import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { ContentArea } from "../../Components";
import { useNestedChildren } from "../../Hooks";
import AssignedPersonnel from "./AssignedPersonnel";
import Overview from "./Details";
import Edit from "./Edit";
import TicketsOverview from "./TicketsOverview";

const Project = () => {
  const { id } = useParams();
  const project = useSelector((store) => store.projects[id]);
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

  const tickets = useSelector((store) => store.tickets);
  const users = useSelector((store) => store.users);

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
