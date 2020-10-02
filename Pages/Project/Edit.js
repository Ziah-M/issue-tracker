import React from 'react'
import styled from 'styled-components'
import { Card } from '../../Components'
import EditForm from './EditForm'

const Edit = ({ project }) => (
  <Wrapper>
    <Card title="Edit Project" description="Change Project Properties">
      <EditForm project={project} />
    </Card>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 350px;
  top: 150px;
  height: 500px;
  width: 500px;
  border: 2px solid black;
  display: none;
`

export default Edit
