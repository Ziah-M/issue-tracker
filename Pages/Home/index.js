import React, { useContext } from "react";
import { FirebaseContext } from "../../Firebase";
import { useTickets } from "../../Hooks";

const Home = (props) => {
  const firebase = useContext(FirebaseContext);
  const tickets = useTickets();

  const handleClick = () => {
    firebase.createProject({
      title: "Add more features",
      projectName: "Portfolio",
      description: "this is test project 2",
      assignedDev: "Citizen",
      priority: "High",
      status: "Open",
      type: "Bugs / Errors",
      created: new Date().toUTCString(),
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Create Test Ticket</button>
      <br />
      {tickets && JSON.stringify(tickets)}
    </div>
  );
};

export default Home;
