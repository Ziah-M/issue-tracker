import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { convertObjectToList } from '../../Helpers'
import ChartReact from '../../../../lib/charts/charts.react'

let { Chart } = ChartReact

const PriorityChart = () => {
  const tickets = useSelector((state) => state.tickets)
  const none = convertObjectToList(tickets).filter(
    (ticket) => ticket.priority.toLowerCase() === 'none',
  )

  const low = convertObjectToList(tickets).filter(
    (ticket) => ticket.priority.toLowerCase() === 'low',
  )

  const medium = convertObjectToList(tickets).filter(
    (ticket) => ticket.priority.toLowerCase() === 'medium',
  )

  const high = convertObjectToList(tickets).filter(
    (ticket) => ticket.priority.toLowerCase() === 'high',
  )

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
        dataPoints: [
          { name: 'None', y: none.length || 0 },
          { name: 'Low', y: low.length || 0 },
          { name: 'Medium', y: medium.length || 0 },
          { nam: 'High', y: high.length || 0 },
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

export default PriorityChart
