import React from "react";
import {
  Form as UnstyledForm,
  Button as UnstyledButton,
  NavLink as Link,
  Col,
} from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useFirebaseActions from "../../redux/useFirebaseActions";

const AssignRoleForm = ({ users = [] }) => {
  const { register, control, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const { editUserRole } = useFirebaseActions();

  const onSubmit = (data) => {
    const { selectedUser, selectedRole } = data;
    if (selectedUser && selectedRole) {
      dispatch(editUserRole(selectedUser, selectedRole));
    }
  };

  return (
    <Wrapper>
      {users[0] && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Col xs="auto">
            <Controller
              control={control}
              name="selectedUser"
              rules={{
                required: true,
                minLength: 4,
                maxLength: 50,
              }}
              defaultValue={users[0] && users[0].uid}
              render={(props) => (
                <Group>
                  <Form.Label>Select 1 or more users</Form.Label>
                  <Form.Control {...props} as="select" id="selectedUser">
                    {users.map((user, index) => (
                      <option key={`user-select-${index}`} value={user.uid}>
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
              name="selectedRole"
              rules={{
                required: true,
                minLength: 4,
                maxLength: 50,
              }}
              defaultValue="Project Manager"
              render={(props) => (
                <Group>
                  <Form.Label>Choose a role to assign</Form.Label>
                  <Form.Control {...props} as="select" id="selectedRole">
                    <option value="ADMIN">ADMIN</option>
                    <option value="PROJECT MANAGER">Project Manager</option>
                  </Form.Control>
                </Group>
              )}
            />
          </Col>
          <Footer>
            <Button type="submit" size="sm" variant="success">
              SUBMIT
            </Button>
          </Footer>
        </Form>
      )}{" "}
    </Wrapper>
  );
};

const Form = styled(UnstyledForm)``;

const Group = styled(Form.Group)``;

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
  justify-content: center;
`;

export default AssignRoleForm;
