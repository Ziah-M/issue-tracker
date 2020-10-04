import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ChartReact from '../../../../lib/charts/charts.react'
import { convertObjectToList } from '../../Helpers'

let { Chart } = ChartReact

const TypeChart = () => {
  const tickets = useSelector((state) => state.tickets)
  const bug = convertObjectToList(tickets).filter(
    (ticket) => ticket.type.toLowerCase() === 'bug / error',
  )

  const feature = convertObjectToList(tickets).filter(
    (ticket) => ticket.type.toLowerCase() === 'new feature',
  )

  const training = convertObjectToList(tickets).filter(
    (ticket) => ticket.type.toLowerCase() === 'training / docs request',
  )

  const enhancement = convertObjectToList(tickets).filter(
    (ticket) => ticket.type.toLowerCase() === 'enhancement',
  )

  const chartEl = useRef(null)
  const options = {
    title: {
      test: 'Tickets by Type',
    },
    animationEnabled: true,
    subtitles: [
      {
        text: 'Tickets By Type',
        verticalAlign: 'center',
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: 'doughnut',
        showInLegend: true,
        dataPoints: [
          { name: 'New Feature', y: feature.length || 0 },
          { name: 'Bug / Error', y: bug.length || 0 },
          { name: 'Training / Docs Request', y: training.length || 0 },
          { name: 'Enhancement', y: enhancement.length || 0 },
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

export default TypeChart
