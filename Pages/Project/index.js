import React from "react";
import { ContentArea, Card } from "../../Components";
import AssignedPersonnel from "./AssignedPersonnel";
import Overview from "./Details";
import TicketsOverview from "./TicketsOverview";
import Edit from './Edit'
import { useProject } from "../../Hooks";
import { useParams } from "react-router";
import styled from "styled-components";

const Project = () => {
  const { id } = useParams();
  const project = useProject(id);

  console.log(project);

  return (
    <ContentArea>
      {project && (
        <Wrapper>
          <Section style={{width:'100%'}}>
            <Overview project={project} />
          </Section>
          <Section>
            <AssignedPersonnel project={project} />
          </Section>
          <Section>
            <TicketsOverview project={project} />
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
