import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { convertObjectToList } from '../../Helpers'
import ChartReact from '../../../../lib/charts/charts.react'
import { faCcVisa } from '@fortawesome/fontawesome-free-brands'

let { Chart } = ChartReact

const PriorityChart = () => {
  const tickets = useSelector((state) => state.tickets)
  const ticketsArray = convertObjectToList(tickets)

  // Assigns integer of number of tickets for each developer assigned to at least 1 ticket
  let userTickets = {}

  ticketsArray.map((ticket) => {
    userTickets[ticket.assignedTo] = !userTickets[ticket.assignedTo]
      ? 1
      : userTickets[ticket.assignedTo] + 1
  })

  const dataPoints = Object.keys(userTickets).map((userName) => {
    return {
      name: userName,
      y: userTickets[userName],
    }
  })

  const chartEl = useRef(null)
  const options = {
    title: {
      test: 'Tickets by Type',
    },
    animationEnabled: true,
    subtitles: [
      {
        text: 'User Ticket Load',
        verticalAlign: 'center',
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: 'doughnut',
        showInLegend: true,
        dataPoints: dataPoints,
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

export default PriorityChart
