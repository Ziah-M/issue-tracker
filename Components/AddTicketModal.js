import React, { useState } from "react";
import {
  Button as UnstyledButton,
  Form,
  NavLink as Link,
  Modal,
  Col,
} from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import Card from "./Card";
import { PATHS } from "../Firebase";
import { useChildren, usePush } from "../Hooks";

const AddTicketModal = ({ handleShow, handleClose, show }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      style={{ height: "auto", maxWidth: "90vw" }}
    >
      <Header closeButton>
        <Title>Add Ticket</Title>
      </Header>
      <Modal.Body>
        <EditForm handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

const Header = styled(Modal.Header)``;

const Title = styled(Modal.Title)`
  text-align: center;
  width: 100%;
  color: #deb150;
  user-select: none;
`;

const EditForm = ({ handleClose = (f) => f }) => {
  const { register, control, handleSubmit, errors } = useForm();
  const add = usePush();

  const { data: projects = [] } = useChildren("projects");
  const { data: users = [] } = useChildren("users");

  const onSubmit = (data) => {
    add(PATHS.TICKETS(), data);
    handleClose();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Col xs="auto">
          <Controller
            control={control}
            name="title"
            rules={{
              required: true,
              minLength: 4,
              maxLength: 25,
            }}
            render={(props) => (
              <Group>
                <Form.Label>Title</Form.Label>
                <Form.Control {...props} id="title" type="text" />
              </Group>
            )}
          />
        </Col>

        <Col xs="auto">
          <Controller
            control={control}
            name="description"
            rules={{
              required: true,
              minLength: 4,
              maxLength: 50,
            }}
            render={(props) => (
              <Group>
                <Form.Label>Description</Form.Label>
                <Form.Control {...props} id="description" type="text" />
              </Group>
            )}
          />
        </Col>

        <Col xs="auto">
          <Controller
            control={control}
            name="projectName"
            rules={{
              required: true,
            }}
            type="text"
            render={(props) => (
              <Group>
                <Form.Label>Assigned To Project</Form.Label>
                <Form.Control {...props} as="select" id="projectName">
                  {projects.map((project) => (
                    <option value={project.projectName}>
                      {project.projectName}
                    </option>
                  ))}
                </Form.Control>
              </Group>
            )}
          />
        </Col>

        <Col xs="auto">
          <Controller
            control={control}
            name="assignedTo"
            rules={{
              required: true,
            }}
            type="text"
            render={(props) => (
              <Group>
                <Form.Label>Assigned To Developer</Form.Label>
                <Form.Control {...props} as="select" id="assignedTo">
                  {users.map((user) => (
                    <option value={user.name}>{user.name}</option>
                  ))}
                </Form.Control>
              </Group>
            )}
          />
        </Col>

        <Col xs="auto">
          <Controller
            control={control}
            name="priority"
            rules={{
              required: true,
            }}
            type="text"
            render={(props) => (
              <Group>
                <Form.Label htmlFor="priority">Priority</Form.Label>
                <Form.Control {...props} as="select" id="priority">
                  <option value=""></option>
                  <option value="None">None</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Form.Control>
              </Group>
            )}
          />
        </Col>

        <Col xs="auto">
          <Controller
            control={control}
            name="status"
            rules={{
              required: true,
            }}
            type="text"
            render={(props) => (
              <Group>
                <Form.Label>Status</Form.Label>
                <Form.Control {...props} as="select" id="status">
                  <option value=""></option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Closed">Closed</option>
                  <option value="Additional Info Required">
                    Additional Info Required
                  </option>
                </Form.Control>
              </Group>
            )}
          />
        </Col>

        <Col xs="auto">
          <Controller
            control={control}
            name="type"
            rules={{
              required: true,
            }}
            type="text"
            render={(props) => (
              <Group>
                <Form.Label>Type</Form.Label>
                <Form.Control {...props} as="select" id="type">
                  <option value=""></option>
                  <option value="Feature Requests">Feature Requests</option>
                  <option value="Bugs / Errors">Bugs / Errors</option>
                  <option value="Training / Document Requests">
                    Training / Document Requests
                  </option>
                  <option value="Comments">Comments</option>
                </Form.Control>
              </Group>
            )}
          />
        </Col>

        <Footer>
          <Link href="">Back to List</Link>
          <Button variant="success" type="submit">
            Submit New
          </Button>
        </Footer>
      </Form>
    </Wrapper>
  );
};

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

const Group = styled(Form.Group)``;

const Control = styled(Form.Control)``;

export default AddTicketModal;
