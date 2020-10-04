import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FirebaseContext } from '../../Firebase'
import useFirebaseActions from '../../redux/useFirebaseActions'
import PriorityChart from './PriorityChart'
import StatusChart from './StatusChart'
import TypeChart from './TypeChart'
import UserAssignedChart from './UserAssignedChart'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const Home = (props) => {
  const firebase = useContext(FirebaseContext)

  const tickets = useSelector((store) => store.tickets)

  return (
    <Wrapper>
      <Row>
        <Col xs="6">
          <PriorityChart />
        </Col>
        <Col xs="6">
          <TypeChart />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <StatusChart />
        </Col>
        <Col xs="6">
          <UserAssignedChart />
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`

export default Home
