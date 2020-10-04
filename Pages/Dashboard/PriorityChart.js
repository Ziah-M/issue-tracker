import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ChartReact from '../../../../lib/charts/charts.react'
import { convertObjectToList } from '../../Helpers'


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
      test: 'basic column chart',
    },
    data: [
      {
        type: 'column',
        dataPoints: [
          { label: 'None', y: none.length || 0 },
          { label: 'Low', y: low.length || 0 },
          { label: 'Medium', y: medium.length || 0 },
          { label: 'High', y: high.length || 0 },
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
