import React, { useState } from "react";
import {
  Form,
  Button as UnstyledButton,
  NavLink as Link,
  Col,
} from "react-bootstrap";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { useUpdate, useChildren } from "../../Hooks";
import { PATHS } from "../../Firebase";

const EditForm = ({ ticket }) => {
  const { register, control, handleSubmit, errors } = useForm();
  const update = useUpdate();

  const { data: projects = [] } = useChildren("projects");
  const { data: users = [] } = useChildren("users");

  const onSubmit = (data) => {
    let alteredData = {};
    Object.keys(data).map((key) => {
      if (!!data[key]) {
        alteredData = { ...alteredData, [key]: data[key] };
      }
    });
    update(PATHS.TICKET(ticket["uid"]), alteredData);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Col xs="auto">
          <Controller
            control={control}
            name="title"
            rules={{
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
            rules={{}}
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
            rules={{}}
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
            rules={{}}
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
            rules={{}}
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
            rules={{}}
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
            Update
          </Button>
        </Footer>
      </Form>
    </Wrapper>
  );
};

const Label = styled(Form.Label)``;

const Group = styled(Form.Group)``;

const Button = styled(UnstyledButton)``;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Control = styled(Form.Control)``;

const Footer = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default EditForm;
