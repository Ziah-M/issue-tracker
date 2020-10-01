import React from "react";
import styled from "styled-components";
import { ContentArea } from "../../Components";
import { useChildren } from "../../Hooks";
import { conditions, withAuthorization } from "../../Session";
import AssignRoleForm from "./AssignRoleForm";
import PersonnelOverview from "./PersonnelOverview";

const ManageRoles = ({ authUser }) => {
  const { data: users } = useChildren("users");

  return (
    <ContentArea>
      <div style={{ height: "auto", width: "100%", overflow: "hidden" }}>
        {JSON.stringify(authUser)}
      </div>
      <h1>Manage User Roles</h1>
      <div style={{ width: "100%", border: "2px solid red" }}>
        <ColLeft>
          <AssignRoleForm users={users} />
        </ColLeft>
        <ColRight>
          <PersonnelOverview users={users} />
        </ColRight>
      </div>
    </ContentArea>
  );
};

const ColLeft = styled.div`
  width: 30%;
  min-height: 100px;
  display: inline-block;
`;

const ColRight = styled.div`
  width: 60%;
  min-height: 100px;
  display: inline-block;
`;

export default ManageRoles;
