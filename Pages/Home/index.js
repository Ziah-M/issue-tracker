import React, { useContext } from "react";
import { FirebaseContext } from "../../Firebase";
import { useTickets } from "../../Hooks";

const Home = (props) => {
  const firebase = useContext(FirebaseContext);
  const tickets = useTickets();

  const handleClick = () => {
    firebase.createTicket({
      title: "Add more features",
      projectName: "Issue Tracker",
      assignedDev: "Ziah",
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
