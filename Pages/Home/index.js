import React, { useContext } from "react";
import { FirebaseContext } from "../../Firebase";
import { useChildren } from "../../Hooks";

const Home = (props) => {
  const firebase = useContext(FirebaseContext);
  const { data: tickets } = useChildren("tickets");

  const handleClick = () => {
    firebase.createProject({
      projectName: "Portfolio",
      description: "this is test project 2",
      assignedDev: "Ziah",
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
