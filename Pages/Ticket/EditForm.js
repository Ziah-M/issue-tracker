import React, { useState } from "react";
import {
  Form as UnstyledForm,
  Button as UnstyledButton,
  NavLink as Link,
} from "react-bootstrap";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useUpdate, useChildren } from "../../Hooks";
import { PATHS } from "../../Firebase";

const EditForm = ({ ticket }) => {
  const { register, handleSubmit, errors } = useForm();
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
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Label>Title</Label>
        <input
          type="text"
          name="title"
          ref={register({
            minLength: 6,
            maxLength: 30,
          })}
          placeholder={ticket.title}
          id="title"
        />

        <Label>Description</Label>
        <input
          name="description"
          type="text"
          ref={register}
          placeholder={ticket.description}
          id="description"
        />

        <Label>Assigned To Project</Label>
        <select name="projectName" id="projectName" ref={register}>
          {projects.map((project) => (
            <option value={project.uid}>{project.name}</option>
          ))}
        </select>
        <Label>Assigned To Dev</Label>
        <select name="assignedTo" id="assignedTo" ref={register}>
          {users.map((user) => (
            <option value={user.uid}>{user.name}</option>
          ))}
        </select>

        <Label>Priority</Label>
        <select name="priority" id="priority" ref={register}>
          <option value=""></option>
          <option value="None">None</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <Label>Status</Label>
        <select name="status" id="status" ref={register}>
          <option value=""></option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
          <option value="Additional Info Required">
            Additional Info Required
          </option>
        </select>

        <Label>Type</Label>
        <select name="type" id="type" ref={register}>
          <option value=""></option>
          <option value="Feature Requests">Feature Requests</option>
          <option value="Bugs / Errors">Bugs / Errors</option>
          <option value="Training / Document Requests">
            Training / Document Requests
          </option>
          <option value="Comments">Comments</option>
        </select>

        <Footer>
          <Link href="">Back to List</Link>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Footer>
      </form>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default EditForm;
