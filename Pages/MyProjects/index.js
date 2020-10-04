import React from 'react'
import { Button as UnstyledButton } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Card, CardTable, ContentArea } from '../../Components'
import { convertObjectToList } from '../../Helpers'
import * as ROUTES from '../../routes'
import { Link } from 'react-router-dom'

const MyProjects = () => {
  const projects = useSelector((store) => store.projects)

  const projectsArray = convertObjectToList(projects)

  const sortedProjects = projectsArray.map((project) => {
    const { projectName: title, description, uid } = project

    return [
      title,
      description,
      <>
        <Link to={`${ROUTES.LINK_PROJECT(uid)}`}>Manage Users</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to={`${ROUTES.LINK_PROJECT(uid)}`}>Details</Link>
      </>,
    ]
  })

  return (
    <ContentArea>
      <Button>CREATE NEW PROJECT</Button>
      <Wrapper>
        <Card
          title="Your Projects"
          description="Table of all outstanding projects"
        >
          <CardTable
            headings={['Project Name', 'Description', ' ']}
            rows={sortedProjects || [[]]}
          />
        </Card>
      </Wrapper>
    </ContentArea>
  )
}

const Button = styled(UnstyledButton)`
  margin-bottom: 50px;
`

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 80px;
`

export default MyProjects
