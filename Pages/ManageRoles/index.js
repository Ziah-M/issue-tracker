import React from "react";
import { withAuthorization, conditions } from "../../Session";
import { ContentArea, Card } from "../../Components";
import AssignRoleForm from "./AssignRoleForm";
import PersonnelOverview from "./PersonnelOverview";
import styled from "styled-components";

const ManageRoles = ({ authUser }) => {
  const users = [
    { name: "Ziah Mayne", email: "demo@demo.com", role: "ADMIN" },
    {
      name: "Demo Dev",
      email: "devdemo@demo.com",
      role: "Developer",
    },
  ];
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

export default withAuthorization(conditions.isSignedIn)(ManageRoles);
