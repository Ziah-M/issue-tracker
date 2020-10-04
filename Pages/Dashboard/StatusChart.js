import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ChartReact from '../../../../lib/charts/charts.react'
import { convertObjectToList } from '../../Helpers'


let { Chart } = ChartReact

const StatusChart = () => {
  const tickets = useSelector((state) => state.tickets)
  const open = convertObjectToList(tickets).filter(
    (ticket) => ticket.status.toLowerCase() === 'open',
  )

  const inProgress = convertObjectToList(tickets).filter(
    (ticket) => ticket.status.toLowerCase() === 'in progress',
  )

  const closed = convertObjectToList(tickets).filter(
    (ticket) => ticket.status.toLowerCase() === 'closed',
  )

  const additionalInfoRequired = convertObjectToList(tickets).filter(
    (ticket) => ticket.status.toLowerCase() === 'additional info required',
  )

  const newTicket = convertObjectToList(tickets).filter(
    (ticket) => ticket.status.toLowerCase() === 'new',
  )

  const chartEl = useRef(null)
  const options = {
    title: {
      test: 'basic column chart',
    },
    data: [
      {
        type: 'column',
        dataPoints: [
          { label: 'New', y: newTicket.length || 0 },
          { label: 'Open', y: open.length || 0 },
          { label: 'In Progress', y: inProgress.length || 0 },
          { label: 'Closed', y: closed.length || 0 },
          {
            label: 'Additional Info Required',
            y: additionalInfoRequired.length || 0,
          },
        ],
      },
    ],
  }
  return (
    <Wrapper>
      <Chart options={options} ref={chartEl} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export default StatusChart
