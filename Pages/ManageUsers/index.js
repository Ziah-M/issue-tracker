import React from "react";
import { withAuthorization, conditions } from "../../Session";

const ManageUsers = () => {
  return <div>ManageUsers</div>;
};

export default withAuthorization(conditions.isAdmin)(ManageUsers);
