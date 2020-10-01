import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { FirebaseContext } from "../../Firebase";

const Home = (props) => {
  const firebase = useContext(FirebaseContext);

  const tickets = useSelector((store) => store.tickets);

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
