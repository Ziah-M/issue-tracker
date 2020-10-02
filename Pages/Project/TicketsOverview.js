import React from 'react'
import { Card, CardTable } from '../../Components'

const TicketsOverview = ({ tickets }) => {
  const headings = ['Title', 'Submitter', 'Developer', 'Status', 'Created', '']
  const rows = tickets
    ? tickets.map((ticket) => [
        ticket.title,
        ticket.submitter,
        ticket.assignedDev,
        ticket.status,
        ticket.created,
      ])
    : [[]]

  return (
    <Card
      title="Tickets for this Project"
      description="Simplified Ticket Details"
    >
      <CardTable headings={headings} rows={rows} />
    </Card>
  )
}

export default TicketsOverview
