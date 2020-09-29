import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";
import { CardTable } from "../../Components";

const Attachment = () => {
  const headings = ["File", "Uploader", "Notes", "Created"];

  return (
    <Card title={`Attachments`} description="Files attached to this ticket.">
      <CardTable headings={headings}  />
    </Card>
  );
};

export default Attachment;
