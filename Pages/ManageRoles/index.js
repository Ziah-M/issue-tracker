import React from 'react'
import { withAuthorization, conditions } from "../../Session";

const ManageRoles = ({authUser}) => {
    return (
        <div>
            {JSON.stringify(authUser)}
        </div>
    )
}

export default withAuthorization(conditions.isSignedIn)(ManageRoles);