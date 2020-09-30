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
import { useChildren, usePush, useUpdate } from "../Hooks";

const AddTicketModal = ({
  handleShow,
  handleClose,
  show,
  isEdit,
  prefillData,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      style={{ height: "auto", maxWidth: "90vw" }}
    >
      <Header closeButton>
        <Title>{isEdit ? "Edit Ticket" : "Add Ticket"}</Title>
      </Header>
      <Modal.Body>
        <EditForm
          handleClose={handleClose}
          isEdit={isEdit}
          prefillData={prefillData}
        />
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

const EditForm = ({
  handleClose = (f) => f,
  isEdit = false,
  prefillData = {
    title: "",
    description: "",
    projectName: "",
    assignedTo: "",
    priority: "",
    status: "",
    type: "",
  },
}) => {
  const { register, control, handleSubmit, errors } = useForm();
  const update = useUpdate();
  const push = usePush();

  const addToDB = {
    setter: isEdit ? update : push,
    path: isEdit ? PATHS.TICKET(prefillData.uid) : PATHS.TICKETS(),
  };

  const { data: projects = [] } = useChildren("projects");
  const { data: users = [] } = useChildren("users");

  const onSubmit = (data) => {
    addToDB.setter(addToDB.path, data);
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
                <Form.Control
                  {...props}
                  id="title"
                  type="text"
                  placeholder={prefillData.title}
                />
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
                <Form.Control
                  {...props}
                  id="description"
                  type="text"
                  placeholder={prefillData.description}
                />
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
              minLength: 4,
            }}
            type="text"
            render={(props) => (
              <Group>
                <Form.Label>Assigned To Project</Form.Label>
                <Form.Control {...props} as="select" id="projectName">
                  <option value=""></option>
                  {projects.map((project) => (
                    <option
                      value={project.projectName}
                      selected={prefillData.projectName === project.projectName}
                    >
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
              minLength: 4,
            }}
            type="text"
            render={(props) => (
              <Group>
                <Form.Label>Assigned To Developer</Form.Label>
                <Form.Control {...props} as="select" id="assignedTo">
                  <option value=""></option>
                  {users.map((user) => (
                    <option
                      value={user.name}
                      selected={prefillData.assignedTo === user.name}
                    >
                      {user.name}
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
            name="priority"
            rules={{
              required: true,
              minLength: 4,
            }}
            type="text"
            render={(props) => (
              <Group>
                <Form.Label htmlFor="priority">Priority</Form.Label>
                <Form.Control {...props} as="select" id="priority">
                  <option value=""></option>
                  <option
                    value="None"
                    selected={prefillData.priority === "None"}
                  >
                    None
                  </option>
                  <option value="Low" selected={prefillData.priority === "Low"}>
                    Low
                  </option>
                  <option
                    value="Medium"
                    selected={prefillData.priority === "Medium"}
                  >
                    Medium
                  </option>
                  <option
                    value="High"
                    selected={prefillData.priority === "High"}
                  >
                    High
                  </option>
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
              minLength: 4,
            }}
            type="text"
            render={(props) => (
              <Group>
                <Form.Label>Status</Form.Label>
                <Form.Control {...props} as="select" id="status">
                  <option value=""></option>
                  <option value="Open" selected={prefillData.status === "Open"}>
                    Open
                  </option>
                  <option
                    value="In Progress"
                    selected={prefillData.status === "In Progress"}
                  >
                    In Progress
                  </option>
                  <option
                    value="Closed"
                    selected={prefillData.status === "Closed"}
                  >
                    Closed
                  </option>
                  <option
                    value="Additional Info Required"
                    selected={prefillData.status === "Additional Info Required"}
                  >
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
              minLength: 4,
            }}
            type="text"
            render={(props) => (
              <Group>
                <Form.Label>Type</Form.Label>
                <Form.Control {...props} as="select" id="type">
                  <option value=""></option>
                  <option
                    value="Feature Requests"
                    selected={prefillData.type === "Feature Requests"}
                  >
                    Feature Requests
                  </option>
                  <option
                    value="Bugs / Errors"
                    selected={prefillData.type === "Bugs / Errors"}
                  >
                    Bugs / Errors
                  </option>
                  <option
                    value="Training / Document Requests"
                    selected={
                      prefillData.type === "Training / Document Requests"
                    }
                  >
                    Training / Document Requests
                  </option>
                  <option
                    value="Comments"
                    selected={prefillData.type === "Comments"}
                  >
                    Comments
                  </option>
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
