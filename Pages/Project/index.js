import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { ContentArea } from '../../Components'
import { convertObjectToList } from '../../Helpers'
import { useNestedChildren } from '../../Hooks'
import AssignedPersonnel from './AssignedPersonnel'
import Overview from './Details'
import Edit from './Edit'
import TicketsOverview from './TicketsOverview'

const Project = () => {
  const { id } = useParams()
  const project = useSelector((store) => store.projects[id])

  const assignedPersonnel = useSelector(
    (store) =>
      store &&
      store.projects &&
      store.projects[id] &&
      store.projects[id].personnel,
  )
  const assignedPersonnelArray = convertObjectToList(assignedPersonnel)

  const assignedTickets = useSelector(
    (store) =>
      store &&
      store.projects &&
      store.projects[id] &&
      store.projects[id].tickets,
  )
  const assignedTicketsArray = convertObjectToList(assignedTickets)

  const tickets = useSelector((store) => store.tickets)
  const users = useSelector((store) => store.users)

  const usersArray = convertObjectToList(users)
  const ticketsArray = convertObjectToList(tickets)

  // let assignedTickets = []

  //   if (tickets && project.tickets) {
  //     assignedTickets = project.tickets.map((id) => tickets[id]);
  //   }

  //   let assignedUsers=[]

  //   if (users && project.personnel) {
  //     assignedUsers = project.personnel.map((id) => users[id]);
  //   }

  console.log(project)

  return (
    <ContentArea>
      {project && (
        <Wrapper>
          <Section style={{ width: '100%' }}>
            <Overview project={project} />
          </Section>
          <Section>
            <AssignedPersonnel users={usersArray} />
          </Section>
          <Section>
            <TicketsOverview tickets={ticketsArray} />
          </Section>

          <Modal>
            <Edit project={project} />
          </Modal>
        </Wrapper>
      )}
    </ContentArea>
  )
}

const Section = styled.div`
  width: 50%;
  padding: 10px;
  margin-bottom: 50px;
  height: auto;
  min-height: 50px;
`

const Modal = styled.div`
  /* DISPLAY IF ROUTE HAS /edit */
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Project
