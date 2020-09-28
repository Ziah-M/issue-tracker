import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";

const useTickets = () => {
  const [tickets, setTickets] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase.tickets().on("value", (snapshot) => {
      setTickets(snapshot.val());
    });

    return () => firebase.tickets().off();
  }, []);

  return tickets;
};

export default useTickets;
