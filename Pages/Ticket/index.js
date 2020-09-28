import React from "react";
import { ContentArea, Card } from "../../Components";
import Attachment from "./Attachment";
import Comments from "./Comments";
import Details from "./Details";
import Edit from "./Edit";
import History from "./History";
import { useTicket } from "../../Hooks";
import { useParams } from "react-router";
import styled from "styled-components";

const Ticket = () => {
  const { id } = useParams();
  const ticket = useTicket(id);

  return (
    <ContentArea>
      {ticket && (
        <Wrapper>
          <Section>
            <Details ticket={ticket} />
          </Section>
          <Section>
            <Comments ticket={ticket} />
          </Section>
          <Section>
            <History ticket={ticket} />
          </Section>
          <Section>
            <Attachment ticket={ticket} />
          </Section>
          <Edit ticket={ticket} />
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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Ticket;
