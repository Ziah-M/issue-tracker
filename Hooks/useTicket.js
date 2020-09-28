import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";

const useTicket = (id) => {
  const [ticket, setTicket] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase.ticket(id).on("value", (snapshot) => {
      setTicket(snapshot.val());
    });

    return () => firebase.ticket().off();
  }, []);

  return ticket;
};

export default useTicket;