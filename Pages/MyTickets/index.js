import React from "react";
import { ContentArea } from '../../Components';
import TicketsTable from "./TicketsTable";

const MyTickets = () => {
  return (
    <ContentArea>
      <TicketsTable />
    </ContentArea>
  );
};

export default MyTickets;