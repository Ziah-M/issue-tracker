import React from "react";
import styled from "styled-components";
import {
  Nav,
  ListGroup,
  FormControl as Control,
  Button,
} from "react-bootstrap";
import * as ROUTES from "../routes";

const Navbar = ({ setShowAddTicket }) => {
  return (
    <Wrapper>
      <List>
        <Li>
          <Link href={ROUTES.HOME}>Loggined in as:</Link>
        </Li>
        <Li>
          <Control placeholder="search" />
        </Li>
        <Li>
          <Link href={ROUTES.MANAGE_USERS}>Home</Link>
        </Li>
        <Li>
          <Button variant="success" size='sm' onClick={() => setShowAddTicket(true)}>
            Create Ticket
          </Button>
        </Li>
        <Li>
          <Link href={ROUTES.MY_TICKETS}>User</Link>
        </Li>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 60px;
  width: 100%;
  min-width: 100%;
  height: auto;
  background: blue;
  background: green;
`;

const Li = styled(ListGroup.Item)`
  user-select: none;
  min-width: 100px;
  display: inline-block;
  &:hover {
    background: #deb150;
  }
`;

const List = styled(ListGroup)`
  display: flex;
  flex-direction: row;
`;

const Link = styled(Nav.Link)`
  padding: 0;
  margin: 0;
  text-align: center;

  &.active {
    background-color: #deb150 !important;
    color: black;
  }
`;

export default Navbar;
