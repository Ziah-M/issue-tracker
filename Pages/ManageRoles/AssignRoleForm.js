import React from "react";
import {
  Form as UnstyledForm,
  Button as UnstyledButton,
  NavLink as Link,
} from "react-bootstrap";
import styled from "styled-components";

const AssignRoleForm = ({ users = [] }) => {
  return (
    <Wrapper>
      <Form>
        <Group>
          <Label>Select 1 or more users</Label>
          <Form.Control as="select">
            {users.map((user) => (
              <option>{user.name}</option>
            ))}
          </Form.Control>
        </Group>
        <Group>
          <Label>Select A Role To Assign</Label>
          <Form.Control as="select">
            <option value="">Admin</option>
            <option value="">Project Manager</option>
          </Form.Control>
        </Group>
        <Footer>
          <Button type="submit">SUBMIT</Button>
        </Footer>
      </Form>
    </Wrapper>
  );
};

const Form = styled(UnstyledForm)``;

const Group = styled(Form.Group)``;

const Label = styled(Form.Label)``;

const Control = styled(Form.Control)``;

const Button = styled(UnstyledButton)``;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Footer = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default AssignRoleForm;
