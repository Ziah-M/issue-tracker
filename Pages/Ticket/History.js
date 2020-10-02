import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { CardTable, Card } from '../../Components'

import { convertObjectToList } from '../../Helpers'

const History = () => {
  const { id: idInParams } = useParams()
  const history = useSelector((state) => state.tickets[idInParams].history)
  const sortedByMostRecentHistory = convertObjectToList(history).reverse()
  const headings = ['Property', 'Old Value', 'New Value', 'Timestamp']
  const rows = sortedByMostRecentHistory.map((row) => [
    row.property,
    row.oldValue,
    row.newValue,
    row.updated,
  ])

  return (
    <Card title="History" description="Log of changes for this ticket">
      <CardTable headings={headings} rows={rows} />
    </Card>
  )
}

export default History
