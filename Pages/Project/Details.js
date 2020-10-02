import React from 'react'
import styled from 'styled-components'
import { Card } from '../../Components'

const Details = ({
  project: {
    projectName = '',
    description = '',
    priority = '',
    status = '',
    type = '',
    created = '',
    updated = '',
  },
}) => (
  <Card title="Details" description="All Projects | Edit Project">
    <Row>
      <Col>
        <Detail title="Project Name" info={projectName}></Detail>
      </Col>
      <Col>
        <Detail title="Project Description" info={description}></Detail>
      </Col>
    </Row>
  </Card>
)

const Row = styled.div`
  width: 100%;
  padding: 10px;
  border-top: 1px solid lightgray;
`

const Col = styled.div`
  width: 50%;
  min-height: 50px;
  display: inline-block;
  padding: 10px;
`

const Title = styled.div`
  text-transform: uppercase;
  width: 100%;
  height: 18px;
  font-size: 12px;
  font-weight: 700;
`

const Info = styled.div`
  text-transform: capitalize;
  font-size: 12px;
  height: 18px;
  margin-left: 5px;
  width: 100%;
  font-weight: 400;
  color: gray;
  overflow: hidden; ;
`

const Detail = ({ title = '', info = '' }) => (
  <>
    <Title>{title}</Title>
    <Info>{info}</Info>
  </>
)

export default Details
