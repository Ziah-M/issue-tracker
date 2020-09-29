import React from "react";
import {
  Form as UnstyledForm,
  Button as UnstyledButton,
  NavLink as Link,
} from "react-bootstrap";
import styled from "styled-components";

const EditForm = ({ ticket }) => {
  return (
    <Wrapper>
      <Form>
        <Group>
          <Label>Title</Label>
          <Control></Control>
        </Group>
        <Group>
          <Label>Description</Label>
          <Control></Control>
        </Group>
        <Group>
          <Label>Project</Label>
          <Form.Control as="select">
            <option>TODO</option>
            <option>PROJECT TODO 1</option>
            <option>PROJECT TODO 2</option>
            <option>PROJECT TODO 3</option>
          </Form.Control>
        </Group>
        <Group>
          <Label>Assigned To</Label>
          <Form.Control as="select">
            <option>PROJECT TODO 1</option>
            <option>PROJECT TODO 2</option>
            <option>PROJECT TODO 3</option>
          </Form.Control>
        </Group>
        <Group>
          <Label>Priority</Label>
          <Form.Control as="select">
            <option>PROJECT TODO 1</option>
            <option>PROJECT TODO 2</option>
            <option>PROJECT TODO 3</option>
          </Form.Control>
        </Group>
        <Group>
          <Label>Status</Label>
          <Form.Control as="select">
            <option>PROJECT TODO 1</option>
            <option>PROJECT TODO 2</option>
            <option>PROJECT TODO 3</option>
          </Form.Control>
        </Group>
        <Group>
          <Label>Type</Label>
          <Form.Control as="select">
            <option>PROJECT TODO 1</option>
            <option>PROJECT TODO 2</option>
            <option>PROJECT TODO 3</option>
          </Form.Control>
        </Group>
        <Footer>
            <Link href=''>Back to List</Link>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Footer>
      </Form>
    </Wrapper>
  );
};

const Form = styled(UnstyledForm)``;

const Group = styled(Form.Group)`
  width: 45%;
  margin: 1%;
  display: inline-block;
`;

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
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

export default EditForm;
