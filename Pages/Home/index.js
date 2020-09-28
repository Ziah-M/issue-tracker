import React, { useContext } from "react";
import { FirebaseContext } from "../../Firebase";
import { useTickets } from "../../Hooks";

const Home = (props) => {
  const firebase = useContext(FirebaseContext);
  const tickets = useTickets();

  const handleClick = () => {
    firebase.createTicket({
      test: "test",
      time: new Date().toString(),
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
